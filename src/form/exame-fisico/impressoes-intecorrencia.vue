<template>
    <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :md="24" :lg="24">
            <el-form-item label="Descrição">
                <el-input type="textarea" rows="4" v-model="impressoesIntercorrencia.descricao"></el-input>
            </el-form-item>
        </el-col>
    </el-row>
</template>

<script>
export default {
    props: {
        impressoesIntercorrencia: {
            type: Object
        }
    }
}
</script>

<style>

</style>