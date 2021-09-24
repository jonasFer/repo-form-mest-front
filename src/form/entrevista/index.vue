<template>
    <el-card>
        <el-row :gutter="20">
            <el-col :xs="12" :sm="7" :md="5" :lg="4">
                <el-form-item label="Internações anteriores">
                    <el-select v-model="entrevista.internacaoAnterior">
                    <el-option label="Sim" value=true></el-option>
                    <el-option label="Não" value=false></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="10" :md="6" :lg="8">
                <el-form-item label="N° de vezes e motivo">
                    <el-input v-model="entrevista.internacaoMotivo"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="6" :lg="4">
                <el-form-item label="Alergia">
                    <el-select v-model="entrevista.alergia" @change="switchSelect($event)">
                        <el-option label="Sim" value="true"></el-option>
                        <el-option label="Não" value="false"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="8" :md="8" :lg="8">
                <el-form-item label="Especificar alergia">
                    <el-input v-model="entrevista.especificacaoAlergia"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="10" :md="6" :lg="24">
                <el-form-item label="Antecedentes">
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="5" :lg="2">
                <el-form-item>
                    <el-checkbox v-model="entrevista.has">Has</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="5" :lg="3">
                <el-form-item>
                    <el-checkbox v-model="entrevista.angina">Angina</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="5" :lg="2">
                <el-form-item>
                    <el-checkbox v-model="entrevista.iam">IAM</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="5" :lg="2">
                <el-form-item>
                    <el-checkbox v-model="entrevista.dm">DM</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="5" :lg="3">
                <el-form-item>
                    <el-checkbox v-model="entrevista.insuficienciaRenal">Insuficiência Renal</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="5" :lg="2">
                <el-form-item>
                    <el-checkbox v-model="entrevista.tabagismo">Tabagismo</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="5" :lg="2">
                <el-form-item>
                    <el-checkbox v-model="entrevista.alcoolismo">Alcoolismo</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="5" :lg="2">
                <el-form-item>
                    <el-checkbox v-model="entrevista.obesidade">Obesidade</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="5" :lg="3">
                <el-form-item>
                    <el-checkbox v-model="entrevista.outro">Outros</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="8" :md="8" :lg="12" v-if="entrevista.outro == true">
                <el-form-item label="Outros antecedentes">
                    <el-input v-model="entrevista.outroAntecedente"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="8" :md="8" :lg="24">
                <el-form-item label="Motivo da internacao atual">
                    <el-input v-model="entrevista.motivoInternacaoAtual"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
    </el-card>
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