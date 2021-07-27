<template>
    <div class=app-container>
        <el-form ref="form" :model="prontuario" size="mini" label-position="top">
            <form-wizard @on-complete="onComplete" 
                        shape="circle"
                        stepSize="xs"
                        color="#3498db">
                <tab-content title="Identificação">
                    <el-row :gutter="20">
                        <el-col :span="24">
                            <el-form-item label="Nome">
                                <el-input v-model="prontuario.identificacao.nome"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :xs="12" :sm="8" :md="8" :lg="4">
                            <el-form-item label="Idade">
                                <el-input v-model="prontuario.identificacao.idade"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :xs="12" :sm="6" :md="6" :lg="4">
                            <el-form-item label="Sexo">
                                <el-select v-model="prontuario.identificacao.sexo" placeholder="Selecione o sexo">
                                <el-option label="Masculino" value="M"></el-option>
                                <el-option label="Feminino" value="F"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="10" :md="10" :lg="8">
                            <el-form-item label="Data de nascimento">
                                <el-input v-model="prontuario.identificacao.dataNascimento"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :xs="12" :sm="6" :md="6" :lg="8">
                            <el-form-item label="Estado civil">
                                <el-select v-model="prontuario.identificacao.estadoCivil" placeholder="Selecione o sexo">
                                <el-option label="Solteiro(a)" value="1"></el-option>
                                <el-option label="Casado(a)" value="2"></el-option>
                                <el-option label="Divorciado(a)" value="3"></el-option>
                                <el-option label="Viúvo(a)" value="4"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col  :xs="12" :sm="8" :md="8" :lg="4">
                            <el-form-item label="Profissão">
                                <el-input v-model="prontuario.identificacao.profissao"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col  :xs="24" :sm="8" :md="8" :lg="4">
                            <el-form-item label="Naturalidade">
                                <el-input v-model="prontuario.identificacao.naturalidade"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col  :xs="24" :sm="8" :md="12" :lg="16">
                            <el-form-item label="Diagnóstico Médico">
                                <el-input v-model="prontuario.identificacao.diagnosticoMedico"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :xs="12" :sm="8" :md="6" :lg="4">
                            <el-form-item label="Leito">
                                <el-input v-model="prontuario.identificacao.leito"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col  :xs="12" :sm="8" :md="6" :lg="4">
                            <el-form-item label="Data da admissão">
                                <el-input v-model="prontuario.identificacao.dataAdmissao"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col  :xs="12" :sm="8" :md="8" :lg="4">
                            <el-form-item label="Horário">
                                <el-input v-model="prontuario.identificacao.horario"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col  :xs="12" :sm="8" :md="8" :lg="8">
                            <el-form-item label="Procedencia">
                                <el-input v-model="prontuario.identificacao.procedencia"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col  :xs="24" :sm="8" :md="8" :lg="4">
                            <el-form-item label="Registro">
                                <el-input v-model="prontuario.identificacao.registro"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </tab-content>
                <tab-content title="Additional Info">
                My second tab content
                </tab-content>
                <tab-content title="Last step">
                Yuhuuu! This seems pretty damn simple
                </tab-content>
            </form-wizard>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
      return {
          prontuario: {
                id: null,
                identificacao: {
                    id: null,
                    nome: null,
                    idade: null,
                    sexo: null,
                    dataNascimento: null,
                    profissao: null,
                    naturalidade: null,
                    diagnosticoMedico: null,
                    leito: null,
                    dataAdmissao: null,
                    horario: null,
                    procedencia: null,
                    registro: null,
                    estadoCivil: null
                },
                entrevista: {
                    id: null,
                    internacaoAnterior: null,
                    internacaoVezes: null,
                    internacaoMotivo: null,
                    alergias: null,
                    especificacaoAlergia: null,
                    motivoInternacaoAtual: null
                },
                exameFisico: {
                    id: null,
                    escalaComa: null,
                    observacoes: null
                }
            }
      }
    },
    methods: {
        onComplete: function(){
            alert('Yay. Done!');
        }
    }
}
</script>

<style>

</style>