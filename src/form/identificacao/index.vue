<template>
    <el-card>
        <el-row :gutter="20">
            <el-col :span="24">
                <el-form-item label="Nome">
                    <el-input v-model="identificacao.nome"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="8" :md="8" :lg="4">
                <el-form-item label="Idade">
                    <el-input v-model="identificacao.idade" type="number"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="6" :lg="4">
                <el-form-item label="Sexo">
                    <el-select v-model="identificacao.sexo" placeholder="Selecione">
                        <el-option
                            v-for="item in optSexo"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id"
                        />
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="10" :md="10" :lg="8">
                <el-form-item label="Data de nascimento">
                    <el-date-picker type="date" v-model="identificacao.dataNascimento" style="width: 100%;" format="dd/MM/yyyy"></el-date-picker>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="6" :lg="8">
                <el-form-item label="Estado civil">
                    <el-select v-model="identificacao.estadoCivil" placeholder="Selecione">
                        <el-option
                            v-for="item in optEstadoCivil"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id"
                        />
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col  :xs="12" :sm="8" :md="8" :lg="4">
                <el-form-item label="Profissão">
                    <el-input v-model="identificacao.profissao"></el-input>
                </el-form-item>
            </el-col>
            <el-col  :xs="24" :sm="8" :md="8" :lg="4">
                <el-form-item label="Naturalidade">
                    <el-input v-model="identificacao.naturalidade"></el-input>
                </el-form-item>
            </el-col>
            <el-col  :xs="24" :sm="8" :md="12" :lg="16">
                <el-form-item label="Diagnóstico Médico">
                    <el-input v-model="identificacao.diagnosticoMedico"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="8" :md="6" :lg="4">
                <el-form-item label="Leito">
                    <el-input v-model="identificacao.leito"></el-input>
                </el-form-item>
            </el-col>
            <el-col  :xs="12" :sm="8" :md="6" :lg="4">
                <el-form-item label="Data da admissão">
                    <el-date-picker type="date" v-model="identificacao.dataAdmissao" style="width: 100%;" format="dd/MM/yyyy"></el-date-picker>
                </el-form-item>
            </el-col>
            <el-col  :xs="12" :sm="8" :md="8" :lg="4">
                <el-form-item label="Horário">
                    <el-time-picker v-model="identificacao.horario" style="width: 100%;" format="HH:mm:dd"></el-time-picker>
                </el-form-item>
            </el-col>
            <el-col  :xs="12" :sm="8" :md="8" :lg="8">
                <el-form-item label="Procedencia">
                    <el-input v-model="identificacao.procedencia"></el-input>
                </el-form-item>
            </el-col>
            <el-col  :xs="24" :sm="8" :md="8" :lg="4">
                <el-form-item label="Registro">
                    <el-input v-model="identificacao.registro"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
    </el-card>
</template>

<script>
export default {
    props: {
        identificacao: {
            type: Object
        }
    },
    data() {
        return {
            optSexo: [
                { "id": 'M', "name": "Masculino" },
                { "id": 'F', "name": "Feminino" }
            ],
            optEstadoCivil: [
                { "id": 1, "name": "Solteiro(a)" },
                { "id": 2, "name": "Casado(a)" },
                { "id": 3, "name": "Divorciado(a)" },
                { "id": 4, "name": "Viúvo(a)" }
            ],
        }
    }
}
</script>

<style>

</style>
