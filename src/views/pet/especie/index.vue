<template>
    <div class="app-container">
        <div class="filter-container">
            <el-input v-model="listQuery.nome" placeholder="Espécie" style="max-width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
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
            <el-form ref="dataForm" :rules="rules" :model="especie" label-position="left" label-width="80px" style="width: 400px; margin-left:60px;">
                <el-form-item label="Espécie" prop="nome">
                    <el-input v-model="especie.nome" />
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">
                    Cancelar
                </el-button>
                <el-button type="primary" @click="dialogStatus==='create'?createData():updateData(especie.id)">
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
                sort: 'id',
                direction: 'ASC'
            },
            especie: {
                id: undefined,
                nome: '',
            },
            dialogFormVisible: false,
            dialogStatus: '',
            textMap: {
                update: 'Editar',
                create: 'Cadastrar'
            },
            rules: {
                nome: [{ required: true, message: 'Nome da espécie é obrigatória', trigger: 'blur' }]
            }
        }
    },
    created() {
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
            all('pet/especie', this.listQuery).then(response => {
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
            this.especie = {
                id: undefined,
                nome: ''
            }
        },
        handleCreate() {
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
                    create('pet/especie', this.especie).then(response => {
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
            this.especie = Object.assign({}, row);
            this.dialogStatus = 'update'
            this.dialogFormVisible = true
            this.$nextTick(() => {
                this.$refs['dataForm'].clearValidate()
            })
        },
        updateData(id) {
            this.$refs['dataForm'].validate((valid) => {
                if (valid) {
                    update(`pet/especie/${id}`, this.especie).then(() => {
                        const index = this.list.findIndex(v => v.id === this.especie.id)
                        this.list.splice(index, 1, this.especie)
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
            remove(`pet/especie/${row.id}`)
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
            return sort === `+${key}` ? 'ascending' : 'descending'
        }
    }
}
</script>