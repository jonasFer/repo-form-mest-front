<template>
    <el-card>
        <el-row :gutter="20">
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="segurancaEmocional.calmo">Calmo</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="segurancaEmocional.apatia">Apatia</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="segurancaEmocional.depressao">Depressão</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="segurancaEmocional.angustia">Angustia</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="segurancaEmocional.agitacao">Agitação</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="segurancaEmocional.agressividade">Agressividade</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="segurancaEmocional.ansiedade">Ansiedade</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="segurancaEmocional.choro">Choro</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="segurancaEmocional.irritabilidade">Irritabilidade</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="segurancaEmocional.medo">Medo</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item label="Vive">
                    <el-select v-model="segurancaEmocional.vivencia">
                        <el-option label="Sozinho" value="1"></el-option>
                        <el-option label="Familiares" value="2"></el-option>
                        <el-option label="Amigos" value="3"></el-option>
                        <el-option label="Asilo" value="4"></el-option>
                        <el-option label="Outro" value="5"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item label="Outro">
                    <el-input v-model="segurancaEmocional.descricaoVivencia"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
    </el-card>
</template>

<script>
export default {
    props: {
        segurancaEmocional: {
            type: Object
        }
    }
}
</script>

<style>

</style>