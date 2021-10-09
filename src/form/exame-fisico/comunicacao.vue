<template>
    <el-card>
        <el-row :gutter="20">
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="comunicacao.comunicacaoAdequada">Comunicação adequada</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="comunicacao.dificuldadeComunicacao">Dificuldade de comunicação</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="comunicacao.linguagemVerbal">Linguagem verbal</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="comunicacao.linguagemNaoVerbal">Linguagem não verbal</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item label="Contato ocular">
                    <el-select v-model="comunicacao.contatoOcular">
                        <el-option label="Sim" value="1"></el-option>
                        <el-option label="Não" value="0"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item label="Fácies tranquila">
                    <el-select v-model="comunicacao.facieTranquila">
                        <el-option label="Sim" value="1"></el-option>
                        <el-option label="Não" value="0"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item label="Fácies tranquila">
                    <el-select v-model="comunicacao.impedimentoExpressao">
                        <el-option label="Permanece em silêncio" value="1"></el-option>
                        <el-option label="Afasia" value="2"></el-option>
                        <el-option label="Disartria" value="3"></el-option>
                        <el-option label="Gagueira" value="4"></el-option>
                        <el-option label="Lesões cordas vocais" value="5"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
        </el-row>
    </el-card>
</template>

<script>
export default {
    props: {
        comunicacao: {
            type: Object
        }
    }
}
</script>

<style>

</style>