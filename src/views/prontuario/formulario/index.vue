<template>
    <div class=app-container>
        <el-form ref="form" :model="prontuario" size="mini" label-position="top">
            <form-wizard @on-complete="onComplete" 
                        shape="circle"
                        stepSize="xs"
                        color="#3498db">        
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
                <tab-content title="Oxigênação">
                    <oxigenacao :oxigenacao=prontuario.exameFisico.oxigenacao></oxigenacao>
                </tab-content>
                <tab-content title="Regulação Vascular">
                    <regulacao-vascular :regulacaoVascular=prontuario.exameFisico.regulacaoVascular></regulacao-vascular>
                </tab-content>
                <tab-content title="Regulação Térmica">
                    <regulacao-termica :regulacaoTermica=prontuario.exameFisico.regulacaoTermica></regulacao-termica>
                </tab-content>
                <tab-content title="Hidratação eliminação vesicao">
                    <hidratacao-eliminacao-vesical :hidratacaoEliminacaoVesical=prontuario.exameFisico.hidratacaoEliminacaoVesical></hidratacao-eliminacao-vesical>
                </tab-content>
                <tab-content title="Alimentação e eliminação intestinal">
                    <alimentacao-eliminacao-intestinal :alimentacaoEliminacaoIntestinal=prontuario.exameFisico.alimentacaoEliminacaoIntestinal></alimentacao-eliminacao-intestinal>
                </tab-content>
                <tab-content title="Cuidado corporal">
                    <cuidado-corporal :cuidadoCorporal=prontuario.exameFisico.cuidadoCorporal></cuidado-corporal>
                </tab-content>
                 <tab-content title="Sono e repouso">
                    <sono-repouso :sonoRepouso=prontuario.exameFisico.sonoRepouso></sono-repouso>
                </tab-content>
                 <tab-content title="Atividade fisica">
                    <atividade-fisica :atividadeFisica=prontuario.exameFisico.atividadeFisica></atividade-fisica>
                </tab-content>
                <tab-content title="Sexualidade">
                    <sexualidade :sexualidade=prontuario.exameFisico.sexualidade></sexualidade>
                </tab-content>
                <tab-content title="Comunicação">
                    <comunicacao :comunicacao=prontuario.exameFisico.comunicacao></comunicacao>
                </tab-content>
                <tab-content title="Sexualidade">
                    <seguranca-emocional :segurancaEmocional=prontuario.exameFisico.segurancaEmocional></seguranca-emocional>
                </tab-content>
                <tab-content title="Religiosidade">
                    <religiosidade :religiosidade=prontuario.exameFisico.religiosidade></religiosidade>
                </tab-content>
                <tab-content title="Impressões">
                    <impressoes-intecorrencia :impressoesIntercorrencia=prontuario.exameFisico.impressoesIntercorrencia></impressoes-intecorrencia>
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
import RegulacaoVascular from '@/form/exame-fisico/regulacao-vascular'
import RegulacaoTermica from '@/form/exame-fisico/regulacao-termica'
import HidratacaoEliminacaoVesical from '@/form/exame-fisico/hidratacao-eliminacao-vesical'
import AlimentacaoEliminacaoIntestinal from '@/form/exame-fisico/alimentacao-eliminacao-intestinal'
import CuidadoCorporal from '@/form/exame-fisico/cuidado-corporal'
import SonoRepouso from '@/form/exame-fisico/sono-repouso'
import Sexualidade from '@/form/exame-fisico/sexualidade'
import AtividadeFisica from '@/form/exame-fisico/atividade-fisica'
import Comunicacao from '@/form/exame-fisico/comunicacao'
import SegurancaEmocional from '@/form/exame-fisico/seguranca-emocional'
import Religiosidade from '@/form/exame-fisico/religiosidade'
import ImpressoesIntecorrencia from '@/form/exame-fisico/impressoes-intecorrencia'

export default {
    components: { 
        Identificacao,
        Entrevista,
        RegulacaoNeurologica,
        PercepcaoOrgaoSentido,
        Oxigenacao,
        RegulacaoVascular,
        RegulacaoTermica,
        HidratacaoEliminacaoVesical,
        AlimentacaoEliminacaoIntestinal,
        CuidadoCorporal,
        SonoRepouso,
        Sexualidade,
        AtividadeFisica,
        Comunicacao,
        SegurancaEmocional,
        Religiosidade,
        ImpressoesIntecorrencia
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
                        espontanea: null,
                        o2Suplementar: null,
                        canulaNasal: null,
                        mascaraSimples: null,
                        mascaraVenturi: null,
                        mascaraReservatorio: null,
                        macronebulizacao: null,
                        vmi: null,
                        tot: null,
                        tqt: null,
                        tqtDescricao: null,
                        fio2: null,
                        spo2: null,
                        fr: null,
                        frDescricao: null,
                        ortopneia: null,
                        cheyneStokes: null,
                        kussmaul: null,
                        expansibilidadeToracica: null,
                        auscutaPulmonar: null,
                        ruidosAdventicios: null,
                        tosse: null,
                        drenagemToracica: null,
                        descricaoDrenagemToracica: null,
                        drenagemToracicaD: null,
                        drenagemToracicaE: null,
                        drenagemToracicaCaracteristica: null,
                        gasometriaHora: null,
                        gasometriaPh: null,
                        gasometriaPaco2: null,
                        gasometriaPao2: null,
                        gasometriaHco3: null,
                        gasometriaBe: null,
                        gasometriaSo2: null
                    },
                    regulacaoVascular: {
                        id: null,
                        auscultaCardiaca: null,
                        arritmia: null,
                        tipoArritimia: null,
                        pulso: null,
                        acessoVenoso: null,
                        descricaoAcessoVenoso: null,
                        complicacaoAcesso: null,
                        drogaVasoativa: null,
                        descricaoDrogaVasoativa: null,
                        doseDrogaVasoativa: null,
                        descricaoDrogaVasoativa2: null,
                        doseDrogaVasoativa2: null,
                        ingurgitamento: null,
                        marcapasso: null,
                        cateter: null,
                        outroCateter: null,
                        dadosFisiologicosFc: null,
                        dadosFisiologicosPa: null,
                        dadosFisiologicosPam: null,
                        dadosFisiologicosPvc: null
                    },
                    regulacaoTermica: {
                        id: null,
                        normotemico: null,
                        hipotermico: null,
                        hipertermico: null,
                        tremor: null,
                        temperaturaAxilar: null
                    },
                    hidratacaoEliminacaoVesical: {
                        id: null,
                        estadoHidratacao: null,
                        edemaPes: null,
                        descricaoEdemaPes: null,
                        edemaMMII: null,
                        descricaoEdemaMMII: null,
                        edemaMMSS: null,
                        descricaoEdemaMMSS: null,
                        edemaAnasarca: null,
                        eliminacaoUrinaria: null,
                        descricaoEliminacaoUrinaria: null,
                        volume: null,
                        oliguria: null,
                        anuria: null,
                        poliura: null,
                        polaciuria: null,
                        disuria: null,
                        hematuria: null,
                        outro: null,
                        caracteristicaUrina: null
                    },
                    alimentacaoEliminacaoIntestinal: {
                        id: null,
                        estadoNutricional: null,
                        pesoCorporal: null,
                        dieta: null,
                        descricaoDieta: null,
                        intoleranciaAlimentar: null,
                        descricaoIntoleranciaAlimentar: null,
                        tipoSonda: null,
                        presencaVomito: null,
                        quantidadeVomito: null,
                        drenagemGastrica: null,
                        descricaoDrenagemGastrica: null,
                        abdome: null,
                        localDreno: null,
                        diasDreno: null,
                        caracteristicaDrenagem: null,
                        eliminacaoIntestinal: null,
                        descricaoEliminacaoIntestinal: null,
                        caracteristicaFezes: null,
                        usoLaxante: null
                    },
                    cuidadoCorporal: {
                        id: null,
                    },
                    sonoRepouso: {
                        id: null,
                    },
                    atividadeFisica: {
                        id: null,
                    },
                    sexualidade: {
                        id: null
                    },
                    comunicacao: {
                        id: null
                    },
                    segurancaEmocional: {
                        id: null,
                        calmo: null,
                        apatia: null,
                        depressao: null,
                        angustia: null,
                        agitacao: null,
                        agressividade: null,
                        ansiedade: null,
                        choro: null,
                        irritabilidade: null,
                        medo: null,
                        vivencia: null,
                        descricaoVivencia: null
                    },
                    religiosidade: {
                        id: null,
                        religiao: null,
                        auxilioEspiritual: null,
                        descricaoAuxilioEspiritual: null
                    },
                    impressoesIntercorrencia: {
                        id: null,
                        descricao: null
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