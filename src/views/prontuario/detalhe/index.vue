<template>
    <div class=app-container>
        TEste 321s
    </div>
</template>
<script>
import { byId } from '@/api/base';

export default {
    data() {
        return {
            id: this.$route.params.id,
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
            },
            options: [
                {
                    value: 'Option1',
                    label: 'Option1'
                }, 
                {
                    value: 'Option2',
                    label: 'Option2'
                }
            ]
        }
    },
    mounted() {
        this.findProntuario()
    },
    methods: {
        findProntuario() {
            byId('prontuario/' + this.id).then(response => {
                this.prontuario = response.data
                console.log(this.prontuario);
            })
        }
    }
}
</script>
<style>
.field-form {
    margin-left: 15px;
}

.el-form-item__label {
    margin-bottom: -10px;
}
</style>