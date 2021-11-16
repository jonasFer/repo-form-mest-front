<template>
    <div class=app-container>
        <el-form ref="dataForm" :model="prontuario" size="mini" label-position="top">
            <el-collapse v-model="activeNames">
                <el-collapse-item name="1">
                    <template slot="title">
                        I - Identificação
                    </template>
                    <identificacao :identificacao=prontuario.identificacao></identificacao>
                </el-collapse-item>
                <el-collapse-item name="2">
                    <template slot="title">
                        II - Entrevista
                    </template>
                    <entrevista :entrevista=prontuario.entrevista></entrevista>
                </el-collapse-item>
                <el-collapse-item name="3">
                    <template slot="title">
                        III - Exame Físico
                    </template>
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
                <el-collapse-item name="4">
                    <template slot="title">
                        IV - Impressões do enfermeiro e intercorrências
                    </template>
                    <impressoes-intecorrencia :impressoesIntercorrencia=prontuario.exameFisico.impressoesIntercorrencia></impressoes-intecorrencia>
                </el-collapse-item>
                <el-collapse-item name="5">
                    <template slot="title">
                        V - Diagnósticos de enfermagem
                    </template>
                    <el-collapse-item title="Necessidade de oxigênação" name="30">
                        <necessidade-oxigenacao :oxigenacao=prontuario.diagnosticoEnfermagem.oxigenacao></necessidade-oxigenacao>
                    </el-collapse-item>
                    <el-collapse-item title="Necessidade de regulação vascular" name="31">
                        <necessidade-regulacao-vascular :regulacaoVascular=prontuario.diagnosticoEnfermagem.regulacaoVascular></necessidade-regulacao-vascular>
                    </el-collapse-item>
                    <el-collapse-item title="Necessidade de regulação neurológica" name="32">
                        <necessidade-regulacao-neurologica :regulacaoNeurologica=prontuario.diagnosticoEnfermagem.regulacaoNeurologica></necessidade-regulacao-neurologica>
                    </el-collapse-item>
                    <el-collapse-item title="Necessidade de nutrição" name="33">
                        <necessidade-nutricao :nutricao=prontuario.diagnosticoEnfermagem.nutricao></necessidade-nutricao>
                    </el-collapse-item>
                    <el-collapse-item title="Necessidade de eliminação" name="34">
                        <necessidade-eliminacao :eliminacao=prontuario.diagnosticoEnfermagem.eliminacao></necessidade-eliminacao>
                    </el-collapse-item>
                    <el-collapse-item title="Necessidade de integridade Fisica" name="35">
                        <necessidade-integridade-fisica :integridadeFisica=prontuario.diagnosticoEnfermagem.integridadeFisica></necessidade-integridade-fisica>
                    </el-collapse-item>
                    <el-collapse-item title="Necessidade de percepção dos orgãos dos sentidos - Dolorosa" name="36">
                        <necessidade-orgao-sentido :percepcaoOrgaoSentido=prontuario.diagnosticoEnfermagem.percepcaoOrgaoSentido></necessidade-orgao-sentido>
                    </el-collapse-item>
                    <el-collapse-item title="Necessidade de regulação térmica" name="37">
                        <necessidade-termica :termica=prontuario.diagnosticoEnfermagem.termica></necessidade-termica>
                    </el-collapse-item>
                    <el-collapse-item title="Necessidade de sono e repouso / Cuidado corporal" name="38">
                        <necessidade-sono-repouso :sonoRepouso=prontuario.diagnosticoEnfermagem.sonoRepouso></necessidade-sono-repouso>
                    </el-collapse-item>
                    <el-collapse-item title="Necessidade de terapeutica" name="39">
                        <necessidade-terapeutica :terapeutica=prontuario.diagnosticoEnfermagem.terapeutica></necessidade-terapeutica>
                    </el-collapse-item>
                    <el-collapse-item title="Necessidade segurança Emocional/Espiritual" name="40">
                        <necessidade-seguranca-emocional :segurancaEmocional=prontuario.diagnosticoEnfermagem.terapeutica></necessidade-seguranca-emocional>
                    </el-collapse-item>
                    <el-collapse-item title="Dados do enfermeiro" name="41">
                        <dados-enfermeiro :dadosEnfermeiro=prontuario.diagnosticoEnfermagem.dadosEnfermeiro></dados-enfermeiro>
                    </el-collapse-item>
                </el-collapse-item>
                <el-collapse-item name="6">
                    <template slot="title">
                        VI - Intervenções de enfermagem
                    </template>
                    <el-collapse-item title="Procedimentos realizados" name="7">
                    </el-collapse-item>
                </el-collapse-item>
            </el-collapse>
            <el-row style="float: right;">
                <br><br>
                <router-link :to="{ name: 'Prontuários' }">
                    <el-button>
                        Voltar
                    </el-button>
                </router-link>
                <el-button type="primary" @click="submitForm()" v-if="!isInfo">
                    Salvar
                </el-button>
            </el-row>
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
import NecessidadeOxigenacao from '@/form/diagnostico-enfermagem/oxigenacao'
import NecessidadeRegulacaoVascular from '@/form/diagnostico-enfermagem/regulacao-vascular'
import NecessidadeRegulacaoNeurologica from '@/form/diagnostico-enfermagem/regulacao-neurologica'
import NecessidadeNutricao from '@/form/diagnostico-enfermagem/nutricao'
import NecessidadeEliminacao from '@/form/diagnostico-enfermagem/eliminacao'
import NecessidadeIntegridadeFisica from '@/form/diagnostico-enfermagem/integridade-fisica'
import NecessidadeOrgaoSentido from '@/form/diagnostico-enfermagem/percepcao-orgao-sentido'
import NecessidadeTermica from '@/form/diagnostico-enfermagem/termica'
import NecessidadeSonoRepouso from '@/form/diagnostico-enfermagem/sono-repouso'
import NecessidadeTerapeutica from '@/form/diagnostico-enfermagem/terapeutica'
import NecessidadeSegurancaEmocional from '@/form/diagnostico-enfermagem/seguranca-emocional'
import DadosEnfermeiro from '@/form/diagnostico-enfermagem/dados-enfermeiro'
import { create, update, byId } from "@/api/base"

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
        ImpressoesIntecorrencia,
        NecessidadeOxigenacao,
        NecessidadeRegulacaoVascular,
        NecessidadeRegulacaoNeurologica,
        NecessidadeNutricao,
        NecessidadeEliminacao,
        NecessidadeIntegridadeFisica,
        NecessidadeOrgaoSentido,
        NecessidadeTermica,
        NecessidadeSonoRepouso,
        NecessidadeTerapeutica,
        NecessidadeSegurancaEmocional,
        DadosEnfermeiro
    },
    data() {
        return {
            id: 0,
            isInfo: false,
            isEdit: false,
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
                    internacaoMotivo: null,
                    alergia: null,
                    especificacaoAlergia: null,
                    has: null,
                    angina: null,
                    iam: null,
                    dm: null,
                    insuficienciaRenal: null,
                    tabagismo: null,
                    alcoolismo: null,
                    obesidade: null,
                    outroAntecedente: null,
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
                        isocorica: null,
                        anisocorica: null,
                        midriase: null,
                        observacaoPupila: null,
                        reflexoFotomotor: null,
                        mmssPreservada: null,
                        mmssParesia: null,
                        mmssObservacaoParesia: null,
                        mmssPlegia: null,
                        mmssObservacaoPlegia: null,
                        mmssParestesia: null,
                        mmssObservacaoParestesia: null,
                        mmiiPreservada: null,
                        mmiiParesia: null,
                        mmiiObservacaoParesia: null,
                        mmiiPlegia: null,
                        mmiiObservacaoPlegia: null,
                        mmiiParestesia: null,
                        mmiiObservacaoParestesia: null,
                        movimentoLento: null,
                        movimentoInvoluntario: null,
                        forcaMotora: null,
                        observacaoForcaMotora: null,
                        cefaleia: null,
                        criseConvulsiva: null,
                        fotofobia: null,
                        rigidezNuca: null,
                        kernig: null,
                        brudzinski: null,
                        psicotropico: null,
                        observacaoPsicotropico: null,
                        psicotropicoDose: null,
                        bloqueador: null,
                        observacaoBloqueador: null,
                        bloqueadorDose: null
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
                        dietaSuspensa: null,
                        dietaOral: null,
                        npt: null,
                        nptMlh: null,
                        ne: null,
                        neMlh: null,
                        aceitacao: null,
                        hgt: null,
                        intoleranciaAlimentar: null,
                        tipoIntoleraciaAlimentar: null,
                        tipoSonda: null,
                        nausea: null,
                        vomito: null,
                        descricaoVomito: null,
                        drenagemGastrica: null,
                        caracteristicaDrenagem: null,
                        abdome: null,
                        eliminacaoIntestinal: null,
                        caracteristicaFezes: null,
                        laxante: null
                    },
                    cuidadoCorporal: {
                        id: null,
                        dependenciaAutocuidado: null,
                        tipoDificuldade: null,
                        grauDificuldade: null,
                        higieneCorporal: null,
                        higieneBucal: null,
                        couroCabeludo: null,
                        peleIntegra: null,
                        peleFria: null,
                        peleAquecida: null,
                        peleCorada: null,
                        hipocorada: null,
                        descricaoHipocorada: null,
                        cianotica: null,
                        icterica: null,
                        sudorese: null,
                        prurido: null,
                        hiperemia: null,
                        cicatriz: null,
                        petequia: null,
                        equimose: null,
                        hematoma: null,
                        up: null,
                        caracteristicaCicatrizacao: null,
                        tratamento: null,
                        lesoes: null
                    },
                    sonoRepouso: {
                        id: null,
                        preservado: null,
                        alterado: null,
                        motivo: null,
                        usaMedicamentos: null,
                        medicamentos: null
                    },
                    atividadeFisica: {
                        id: null,
                        restricao: null,
                        deambulacao: null,
                        atrofia: null,
                        descricaoAtrofia: null,
                        deficiencia: null,
                        descricaoDeficiencia: null,
                        dorMovimento: null,
                        descricaoDorMovimento: null
                    },
                    sexualidade: {
                        id: null,
                        alteracaoMama: null,
                        alteracaoVulva: null,
                        alteracaoPenis: null,
                        alteracaoBolsaEscrotal: null,
                        tipoAlteracao: null,
                        dst: null,
                        descricaoDst: null,
                        preservativo: null,
                        anticoncepcional: null,
                        descricao: null
                    },
                    comunicacao: {
                        id: null,
                        comunicacaoAdequada: null,
                        dificuldadeComunicacao: null,
                        linguagemVerbal: null,
                        linguagemNaoVerbal: null,
                        contatoOcular: null,
                        facieTranquila: null,
                        impedimentoExpressao: null,
                        conheceProblema: null
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
                },
                diagnosticoEnfermagem: {
                    oxigenacao: {
                        dispneia: null,
                        padraoRespiratorioPrejudicado: null,
                        trocaGasesPrejudicada: null,
                        ventilacaoPrejudicada: null,
                        ventilacaoMecanica: null,
                        tosseProdutiva: null,
                        tosseSeca: null,
                        expectoracaoInsuficiente: null,
                        limpezaViaAereaPrejudicada: null,
                        outro: null
                    },
                    regulacaoVascular: {
                        intoleranciaAtividadeFisica: null,
                        capacidadeFisicaPrejudicada: null,
                        choqueSeptico: null,
                        choqueHipovolemico: null,
                        debitoCardiacoDiminuido: null,
                        debitoCardiacoAumentado: null,
                        perfusaoPrejudicada: null,
                        arritmia: null,
                        perfusaoIneficaz: null,
                        pressaoSanguineaDiminuida: null,
                        riscoChoque: null,
                        pressaoSanguineaAumentada: null,
                        redeVascularPrejudicada: null,
                        riscoSangramento: null,
                        hemorragia: null,
                        outro: null
                    },
                    regulacaoNeurologica: {
                        conscienciaAlterada: null,
                        conscienciaDiminuida: null,
                        comaGrave: null,
                        delirio: null,
                        capacidadeIntercranianaDiminuida: null,
                        confusao: null,
                        convulsao: null,
                        orientacaoPrejudicada: null,
                        alucinacao: null,
                        confusaoAguda: null,
                        neuropsicomotor: null,
                        cognicaoPrejudicada: null,
                        outro: null
                    },
                    nutricao: {
                        apetitePrejudicado: null,
                        caquexia: null,
                        degluticaoPrejudicada: null,
                        emagrecimento: null,
                        ingestaoDiminuida: null,
                        intoleranciaAlimentar: null,
                        pesoExcessivo: null,
                        pesoDiminuido: null,
                        riscoGlicemia: null,
                        outro: null
                    },
                    eliminacao: {
                        constipacao: null,
                        motilidade: null,
                        retencaoUrinaria: null,
                        diarreia: null,
                        eliminacaoIntestinalPrejudicada: null,
                        incontinenciaUrinaria: null,
                        eliminacaoUrinariaDiminuida: null,
                        eliminacaoUrinariaAumentada: null,
                        outro: null
                    },
                    integridadeFisica: {
                        acessoPrejudicado: null,
                        feridaCirurgicaInfectada: null,
                        feridaInfectada: null,
                        pelePrejudicada: null,
                        mucosaOralPrejudicada: null,
                        necrose: null,
                        riscoUlcera: null,
                        ulceraPressao: null,
                        outro: null
                    },
                    percepcaoOrgaoSentido: {
                        disuria: null,
                        dorMusculoesqueletica: null,
                        dorEpigastrica: null,
                        percepcaoDolorosaAlterada: null,
                        dorAguda: null,
                        dorCronica: null,
                        dorFeridaCirurugica: null,
                        outro: null
                    },
                    termica: {
                        hipertermia: null,
                        temperaturaDiminuida: null,
                        outro: null
                    },
                    sonoRepouso: {
                        insonia: null,
                        dificuldadeAdormecer: null,
                        deficitAutocuidado: null,
                        sonoPrejudicado: null,
                        outro: null
                    },
                    terapeutica: {
                        recuperacaCirurgicaRetardada: null,
                        recuperacaoSaudeRetardada: null,
                        respostaInsastifatoria: null,
                        outro: null
                    },
                    segurancaEmocional: {
                        medo: null,
                        angustia: null,
                        ansiedade: null,
                        depressivo: null,
                        desesperanca: null
                    },
                    dadosEnfermeiro: {
                        nome: null,
                        coren: null
                    }
                }
            }
        }
    },
    activated() {
        const route = this.$route
        this.isInfo = false
        this.isEdit = false
        this.id = 0
        if (route.name == 'Editar Prontuário') {
            this.isEdit = true
            this.id = route.params.id
            this.getProntuario(this.id);
        }
    },
    methods: {
        submitForm() {
            this.$confirm('Deseja salvar o formulário?', '', {
                confirmButtonText: 'Sim',
                cancelButtonText: 'Não',
                type: 'warning'
            }).then(() => {
                this.$refs['dataForm'].validate((valid) => {
                    if (valid) {
                        if (this.isEdit) {
                            this.updateProntuario(this.id)
                            return
                        }

                        this.createProntuario()
                    } else {
                        this.$alert('Existem campos obrigatórios não preenchidos', {
                            confirmButtonText: 'OK'
                        });
                    }
                })
            })
        },
        createProntuario() {
            create('prontuario', this.prontuario)
                .then(response => {
                    this.$notify({
                        title: 'Successo',
                        message: 'Cadastrado com sucesso',
                        type: 'success',
                        duration: 2000
                    })

                    this.$router.push({ name: 'Prontuários' })
                })
                .catch(() => {
                    this.$notify({
                        title: 'Falha',
                        message: 'Ocorreu um erro ao tentar salvar o prontuário. Tente novamente em alguns instantes.',
                        type: 'error',
                        duration: 5000
                    })
                });
        },
        updateProntuario(id) {
            update(`/prontuario/${id}`, this.prontuario)
                .then(response => {
                    this.$notify({
                        title: 'Successo',
                        message: 'Salvo com sucesso',
                        type: 'success',
                        duration: 2000
                    })

                    this.$router.push({ name: 'Prontuários' })
                })
                .catch(() => {
                    this.$notify({
                        title: 'Falha',
                        message: 'Ocorreu um erro ao tentar salvar o prontuário. Tente novamente em alguns instantes.',
                        type: 'error',
                        duration: 5000
                    })
                });
        },
        getProntuario(id) {
            byId(`/prontuario/${id}`).then(response => {
                this.prontuario = response.data;
            })
        },
    }
}
</script>

<style scoped>
.attention {
    font-size: 40px;
    color: orange;
}

.success {
    font-size: 40px;
    color: green;
}
</style>
