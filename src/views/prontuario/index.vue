<template>
    <div class="app-container">
        <div class="filter-container">
            <el-input v-model="listQuery.nome" placeholder="Nome" style="max-width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
            <el-button v-waves class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-search" @click="handleFilter">
                Pesquisar
            </el-button>
            <router-link to="/prontuario/formulario">
                <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit">
                    Cadastrar
                </el-button>
            </router-link>
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
            <el-table-column label="Nome" align="center">
                <template slot-scope="{row}">
                    <span>{{ row.nome }}</span>
                </template>
            </el-table-column>
            <el-table-column label="Ações" align="center" width="230" class-name="small-padding fixed-width">
                <template slot-scope="{row}">
                    <router-link :to="`/prontuario/${row.id}`">
                        <el-button type="primary" size="mini">
                            Info
                        </el-button>
                    </router-link>
                </template>
            </el-table-column>
        </el-table>

        <pagination class="text-center" v-show="total > 10" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="paginate" />

    </div>
</template>
<script>
import { all } from '@/api/base';
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
            all('prontuario', this.listQuery).then(response => {
                setTimeout(() => {
                    this.listLoading = false
                    this.list = response.data.itens;
                    this.total = response.data.total;
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
        getSortClass: function(key) {
            const sort = this.listQuery.sort
            return sort === `+${key}` ? 'ascending' : 'descending'
        }
    }
}
</script>