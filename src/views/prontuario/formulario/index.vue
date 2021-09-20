<template>
    <div class=app-container>
        <el-form ref="form" :model="prontuario" size="mini" label-position="top">
            <el-collapse v-model="activeNames">
                <el-collapse-item name="1">
                    <template slot="title">
                        Identificação <i class="el-icon-warning-outline attention"></i>
                    </template>
                    <identificacao :identificacao=prontuario.identificacao></identificacao>
                </el-collapse-item>
                <el-collapse-item name="2">
                    <template slot="title">
                        Entrevista <i class="el-icon-warning-outline attention"></i>
                    </template>
                    <entrevista :entrevista=prontuario.entrevista></entrevista>
                </el-collapse-item>
                <el-collapse-item title="Exame Físico" name="3">
                    <el-collapse-item title="Regulação neurológica" name="10">
                        <regulacao-neurologica :regulacaoNeurologica=prontuario.exameFisico.regulacaoNeurologica></regulacao-neurologica>
                    </el-collapse-item>
                    <el-collapse-item title="Percepção dos órgãos dos sentidos" name="11">   
                        <percepcao-orgao-sentido :percepcaoOrgaoSentido=prontuario.exameFisico.percepcaoOrgaoSentido></percepcao-orgao-sentido>
                    </el-collapse-item>
                    <el-collapse-item title="Oxigênação" name="12">
                        <oxigenacao :oxigenacao=prontuario.exameFisico.oxigenacao></oxigenacao>
                    </el-collapse-item>
                    <el-collapse-item title="Regulação vascular" name="13">
                         <regulacao-vascular :regulacaoVascular=prontuario.exameFisico.regulacaoVascular></regulacao-vascular>
                    </el-collapse-item>
                    <el-collapse-item title="Regulação térmica" name="14">
                        <regulacao-termica :regulacaoTermica=prontuario.exameFisico.regulacaoTermica></regulacao-termica>   
                    </el-collapse-item>
                    <el-collapse-item title="Hidratação e Eliminação Vesical" name="15">
                        <hidratacao-eliminacao-vesical :hidratacaoEliminacaoVesical=prontuario.exameFisico.hidratacaoEliminacaoVesical></hidratacao-eliminacao-vesical>
                    </el-collapse-item>
                     <el-collapse-item title="Alimentação e eliminação intestinal" name="16">
                        <alimentacao-eliminacao-intestinal :alimentacaoEliminacaoIntestinal=prontuario.exameFisico.alimentacaoEliminacaoIntestinal></alimentacao-eliminacao-intestinal>
                    </el-collapse-item>
                    <el-collapse-item title="Cuidado corporal" name="17">
                        <cuidado-corporal :cuidadoCorporal=prontuario.exameFisico.cuidadoCorporal></cuidado-corporal>
                    </el-collapse-item>
                    <el-collapse-item title="Sono e repouso" name="18">
                        <sono-repouso :sonoRepouso=prontuario.exameFisico.sonoRepouso></sono-repouso>
                    </el-collapse-item>
                    <el-collapse-item title="Atividade fisica" name="19">
                        <atividade-fisica :atividadeFisica=prontuario.exameFisico.atividadeFisica></atividade-fisica>
                    </el-collapse-item>
                    <el-collapse-item title="Sexualidade" name="20">
                        <sexualidade :sexualidade=prontuario.exameFisico.sexualidade></sexualidade>
                    </el-collapse-item>
                    <el-collapse-item title="Comunicação/Educação para a saúde/Aprendizagem" name="21">
                        <comunicacao :comunicacao=prontuario.exameFisico.comunicacao></comunicacao>
                    </el-collapse-item>
                    <el-collapse-item title="Segurança emocional/Amor e aceitação/Gregária" name="22">
                        <seguranca-emocional :segurancaEmocional=prontuario.exameFisico.segurancaEmocional></seguranca-emocional>
                    </el-collapse-item>
                    <el-collapse-item title="Religiosidade" name="23">
                        <religiosidade :religiosidade=prontuario.exameFisico.religiosidade></religiosidade>
                    </el-collapse-item>
                </el-collapse-item>
                <el-collapse-item title="Impressões do enfermeiro e intercorrências" name="4">
                    <impressoes-intecorrencia :impressoesIntercorrencia=prontuario.exameFisico.impressoesIntercorrencia></impressoes-intecorrencia>
                </el-collapse-item>
                <el-collapse-item title="Diagnósticos de enfermagem" name="5">
                    
                </el-collapse-item>
                <el-collapse-item title="Intervenções de enfermagem" name="6">
                    <el-collapse-item title="Procedimentos realizados" name="7">
                    
                    </el-collapse-item>
                </el-collapse-item>
            </el-collapse>
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
        activeNames: null,
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
      };
    }
}
</script>

<style scoped>
.attention {
    font-size: 40px;
    color: orange;
}
</style>