<template>
    <div class="app-container">
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
            <el-table-column label="ID" prop="id" sortable="custom" align="center" :class-name="getSortClass('id')">
                <template slot-scope="{row}">
                    <span>{{ row.id }}</span>
                </template>
            </el-table-column>
            <el-table-column label="Ações" align="center" class-name="small-padding fixed-width">
                <template slot-scope="{row}">
                    <router-link :to="`/prontuario/${row.id}`">
                        <el-button type="primary" size="mini">
                            Ver
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
            all('prontuario/pessoa/' + this.$route.params.id, this.listQuery).then(response => {
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
        getSortClass: function(key) {
            const sort = this.listQuery.sort
            return sort === `+${key}` ? 'ascending' : 'descending'
        }
    }
}
</script>