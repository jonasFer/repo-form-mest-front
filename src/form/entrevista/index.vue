<template>
    <el-row :gutter="20">
        <el-col :xs="12" :sm="7" :md="5" :lg="4">
            <el-form-item label="Internações anteriores">
                <el-select v-model="entrevista.internacaoAnterior">
                <el-option label="Sim" value=true></el-option>
                <el-option label="Não" value=false></el-option>
                </el-select>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="10" :md="6" :lg="4">
            <el-form-item label="N° de vezes e motivo">
                <el-input v-model="entrevista.internacaoMotivo"></el-input>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="4">
            <el-form-item label="Antecedentes">
                <el-select v-model="entrevista.antecedente">
                    <el-option label="HAS" value="1"></el-option>
                    <el-option label="Angina" value="2"></el-option>
                    <el-option label="IAM" value="3"></el-option>
                    <el-option label="DM" value="4"></el-option>
                    <el-option label="Insuficiência renal" value="5"></el-option>
                    <el-option label="Tabagismo" value="6"></el-option>
                    <el-option label="Alcoolismo" value="7"></el-option>
                    <el-option label="Obesidade" value="8"></el-option>
                    <el-option label="Outros" value="9"></el-option>
                </el-select>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="8" :md="8" :lg="12">
            <el-form-item label="Outros antecedentes">
                <el-input v-model="entrevista.outroAntecedente"></el-input>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="6" :md="6" :lg="4">
            <el-form-item label="Alergia">
                <el-select v-model="entrevista.alergia">
                <el-option label="Sim" value=true></el-option>
                <el-option label="Não" value=false></el-option>
                </el-select>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="8" :md="8" :lg="6">
            <el-form-item label="Especificar">
                <el-input v-model="entrevista.especificacaoAlergia"></el-input>
            </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="8" :md="8" :lg="14">
            <el-form-item label="Motivo da internacao atual">
                <el-input v-model="entrevista.motivoInternacaoAtual"></el-input>
            </el-form-item>
        </el-col>
    </el-row>
</template>

<script>
export default {
    props: {
        entrevista: {
            type: Object
        }
    }
}
</script>

<style>

</style>