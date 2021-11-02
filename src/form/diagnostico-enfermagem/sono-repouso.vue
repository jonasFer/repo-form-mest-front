<template>
    <el-card>
        <el-row :gutter="20">
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="sonoRepouso.insonia">Insônia</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="sonoRepouso.dificuldadeAdormecer">Dificuldade para adormecer</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="sonoRepouso.deficitAutocuidado">Déficit de autocuidado</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="sonoRepouso.sonoPrejudicado">Sono e repouso prejudicado</el-checkbox>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <el-form-item label="Outros">
                    <el-input v-model="sonoRepouso.outro"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
    </el-card>
</template>

<script>
export default {
    props: {
        sonoRepouso: {
            type: Object
        }
    }
}
</script>

<style scoped>

</style>