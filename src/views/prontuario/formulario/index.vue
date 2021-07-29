<template>
    <div class=app-container>
        <el-form ref="form" :model="prontuario" size="mini" label-position="top">
            <form-wizard @on-complete="onComplete" 
                        shape="circle"
                        stepSize="xs"
                        color="#3498db">
                <tab-content title="Oxigênação">
                    <oxigenacao :oxigenacao=prontuario.exameFisico.oxigenacao></oxigenacao>
                </tab-content>
                <tab-content title="Identificação">
                    <identificacao :identificacao=prontuario.identificacao></identificacao>
                </tab-content>
                <tab-content title="Entrevista">
                    <entrevista :entrevista=prontuario.entrevista></entrevista>
                </tab-content>
                <tab-content title="Regulação Neurológica">
                    <regulacao-neurologica :regulacaoNeurologica=prontuario.exameFisico.regulacaoNeurologica></regulacao-neurologica>
                </tab-content>
                <tab-content title="Percepção de órgãos dos sentidos">
                    <percepcao-orgao-sentido :percepcaoOrgaoSentido=prontuario.exameFisico.percepcaoOrgaoSentido></percepcao-orgao-sentido>
                </tab-content>
            </form-wizard>
        </el-form>
    </div>
</template>

<script>
import Identificacao from '@/form/identificacao'
import Entrevista from '@/form/entrevista'
import RegulacaoNeurologica from '@/form/exame-fisico/regulacao-neurologica'
import PercepcaoOrgaoSentido from '@/form/exame-fisico/percepcao-orgao-sentido'
import Oxigenacao from '@/form/exame-fisico/oxigenacao'

export default {
    components: { 
        Identificacao,
        Entrevista,
        RegulacaoNeurologica,
        PercepcaoOrgaoSentido,
        Oxigenacao
    },
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
                    antecedente: null, // Vai ter que mudar
                    outroAntecedente: null,
                    alergia: null,
                    especificacaoAlergia: null,
                    motivoInternacaoAtual: null
                },
                exameFisico: {
                    id: null,
                    regulacaoNeurologica: {
                        id: null,
                        escalaComa: null,
                        aberturaOcular: null,
                        respostaMotora: null,
                        respostaVerbal: null,
                        observacao: null,
                        pupila: null,
                        observacaoPupila: null,
                        reflexoFotomotor: null,
                        mobilidadeFisicaMmss: null,
                        observacaoMobilidadeFisicaMmss: null,
                        mobilidadeFisicaMmii: null,
                        observacaoMobilidadeFisicaMmii: null,
                        medicacaoPsicotropico: null,
                        observacaoMedicacaoPsicotropico: null,
                        dosePsicotropico: null,
                        medicacaoBloqueador: null,
                        observacaoMedicacaoBloqueador: null,
                        doseBloqueador: null
                    },
                    percepcaoOrgaoSentido: {
                        id: null,
                        condicaoVisual: null,
                        descricaoCondicaoVisual: null,
                        sensibilidadeDor: null,
                        intensidadeDor: null,
                        usoMedicamento: null
                    },
                    oxigenacao: {
                        id: null,
                        ventilacaoEspontanea: null,
                        o2Suplementar: null,
                        descricaoO2Suplementar: null,
                        protese: null,
                        auscutaPulmonar: null,
                        tosse: null,
                        drenagemToracica: null,
                        descricaoDrenagemToracica: null,
                        gasometriaHora: null,
                        gasometriaPh: null,
                        gasometriaPaco2: null,
                        gasometriaPao2: null,
                        gasometriaHco3: null,
                        gasometriaBe: null,
                        gasometriaSo2: null
                    }
                }
            }
      }
    },
    methods: {
        onComplete: function(){
            console.log(this.prontuario)
        }
    }
}
</script>

<style>

</style>