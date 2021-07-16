<template>
    <div class="app-container">
        <div class="filter-container">
            <el-input v-model="listQuery.nome" placeholder="Raça" style="max-width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
            <el-button v-waves class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-search" @click="handleFilter">
                Pesquisar
            </el-button>
            <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">
                Cadastrar
            </el-button>
        </div>
        <el-table
            :key="tableKey"
            v-loading="listLoading"
            :data="list"
            border
            fit
            highlight-current-row
            style="width: 100%;"
            @sort-change="sortChange"
        >
            <el-table-column label="ID" prop="id" sortable="custom" align="center" width="80" :class-name="getSortClass('id')">
                <template slot-scope="{row}">
                    <span>{{ row.id }}</span>
                </template>
            </el-table-column>
            <el-table-column label="Espécie" align="center">
                <template slot-scope="{row}">
                    <span>{{ row.especie }}</span>
                </template>
            </el-table-column>
            <el-table-column label="Raça" align="center">
                <template slot-scope="{row}">
                    <span>{{ row.nome }}</span>
                </template>
            </el-table-column>
            <el-table-column label="Ações" align="center" width="230" class-name="small-padding fixed-width">
                <template slot-scope="{row,$index}">
                    <el-button type="primary" size="mini" @click="handleUpdate(row)">
                        Editar
                    </el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(row,$index)">
                        Deletar
                    </el-button>
                </template>
            </el-table-column>
        </el-table>

        <pagination class="text-center" v-show="total > 10" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="paginate" />

        <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
            <el-form ref="dataForm" :rules="rules" :model="raca" label-position="left" label-width="80px" style="width: 400px; margin-left:60px;">
                <el-form-item label="Raça" prop="nome">
                    <el-input v-model="raca.nome" />
                </el-form-item>
                <el-form-item label="Espécie" prop="especie">
                    <el-select
                        label="Espécie"
                        v-model="raca.id_especie"
                        placeholder="Selecione"
                        style="width: 130px"
                    >
                        <el-option v-for="item in especies" :key="item.id" :label="item.nome" :value="item.id" />
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">
                    Cancelar
                </el-button>
                <el-button type="primary" @click="dialogStatus==='create'?createData():updateData(raca.id)">
                    Salvar
                </el-button>
            </div>
        </el-dialog>

    </div>
</template>

<script>
import { all, remove, create, update } from '@/api/base';
import waves from '@/directive/waves';
import Pagination from '@/components/Pagination';

export default {
    components: { Pagination },
    directives: { waves },
    data() {
        return {
            tableKey: 0,
            list: null,
            total: 0,
            listLoading: true,
            listQuery: {
                page: 1,
                limit: 10,
                id: undefined,
                nome: undefined,
                sort: 'id',
                direction: 'ASC'
            },
            raca: {
                id: undefined,
                nome: '',
                especie: '',
                id_especie: undefined
            },
            especies: [],
            dialogFormVisible: false,
            dialogStatus: '',
            textMap: {
                update: 'Editar',
                create: 'Cadastrar'
            },
            rules: {
                nome: [{ required: true, message: 'Nome da raça é obrigatória', trigger: 'blur' }]
            }
        }
    },
    mounted() {
        this.getList()
    },
    methods: {
        paginate() {
            this.getList();
            this.listQuery.page += 1;
        },
        getList() {
            this.listQuery.page -= 1;
            this.listLoading = true
            all('pet/raca', this.listQuery).then(response => {
                this.list = response.data.itens;
                this.total = response.data.total;
                setTimeout(() => {
                    this.listLoading = false
                }, 1000)
            })
        },
        handleFilter() {
            this.listQuery.page = 0;
            this.getList()
        },
        sortChange(data) {
            const { prop, order } = data
            if (prop === 'id') {
                this.sortByID(order)
            }
        },
        sortByID(order) {
            if (order === 'ascending') {
                this.listQuery.direction = 'ASC'
            } else {
                this.listQuery.direction = 'DESC'
            }
            this.handleFilter()
        },
        resetEspecie() {
            this.raca = {
                id: undefined,
                nome: '',
                id_especie: undefined,
                especie: ''
            }
        },
        handleCreate() {
            this.allEspecies();
            this.resetEspecie()
            this.dialogStatus = 'create'
            this.dialogFormVisible = true
            this.$nextTick(() => {
                this.$refs['dataForm'].clearValidate()
            })
        },
        createData() {
            this.$refs['dataForm'].validate((valid) => {
                if (valid) {
                    create('pet/raca', this.raca).then(response => {
                        if (this.list.length < 10) {
                            this.list.push(response.data)
                        }
                        this.total += 1;
                        this.dialogFormVisible = false
                        this.$notify({
                            title: 'Successo',
                            message: 'Cadastrado com sucesso',
                            type: 'success',
                            duration: 2000
                        })
                    })
                }
            })
        },
        handleUpdate(row) {
            this.allEspecies();
            this.raca = Object.assign({}, row);
            this.dialogStatus = 'update'
            this.dialogFormVisible = true
            this.$nextTick(() => {
                this.$refs['dataForm'].clearValidate()
            })
        },
        updateData(id) {
            this.$refs['dataForm'].validate((valid) => {
                if (valid) {
                    update(`pet/raca/${id}`, this.raca).then(response => {
                        const index = this.list.findIndex(v => v.id === this.raca.id)
                        this.list.splice(index, 1, response.data)
                        this.dialogFormVisible = false
                        this.$notify({
                            title: 'Successo',
                            message: 'Atualizado com sucesso!',
                            type: 'success',
                            duration: 2000
                        })
                    })
                }
            })
        },
        handleDelete(row) {
            remove(`pet/raca/${row.id}`)
                .then(() => {
                    this.$notify({
                        title: 'Sucesso',
                        message: 'Deletado com sucesso!',
                        type: 'success',
                        duration: 2000
                    })

                    this.getList();
                })
                .catch(() => {
                    this.$notify({
                        title: 'Erro',
                        message: 'Ocorreu um erro. Tente novamente!',
                        type: 'error',
                        duration: 2000
                    })
                })
        },
        getSortClass: function(key) {
            const sort = this.listQuery.sort
            return sort === `+${key}` ? 'ASC' : 'DESC'
        },
        allEspecies() {
            all('pet/especie').then(response => {
              this.especies = response.data.itens;
            })
        }
    }
}
</script>
