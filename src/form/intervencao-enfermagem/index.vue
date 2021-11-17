<template>
    <el-card>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.aspirarSecrecao">Aspirar secreções TOT, TQT, VAS e VAI</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input placeholder="Aprazamento" v-model="intervencoesEnfermagem.aprazamentoAspirarSecrecao">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.manterTotCentralizado">Manter TOT centralizado</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoManterTot" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.elevarCabeceiraLeito">Elevar cabeceira do leito entre 30 - 45°</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoElevarCabeceira" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.monitorarFrequencia">Monitorar frequência e ritmo ventilatório</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoMonitorarFrequencia" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.sinaisAngustia">Atentar para sinais de angústia respiratória</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoSinaisAngustia" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.monitorarSpo2">Monitorar SpO²</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoMonitorarSpo2" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.terapiaO2">Proporcionar terapia suplementar O²</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoTerapiaO2" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.necessidadeVmni">Conscientizar o paciente sobre necessidade de VMNI</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoNecessidadeVmni" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.manterRepousoLeito">Manter repouso no leito</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoManterRepousoLeito" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.nivelConsciencia">Monitorar nível de consciência (pela ECG)2</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoNivelConsciencia" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.sinalDesequilibrio">Monitorar sinais de desequilíbrio ácido-básico</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoSinalDesequilibrio" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.sinalIcc">Monitorar sinais de ICC direita</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoSinalIcc" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.respiracaoPaciente">Avaliar se as respirações do paciente estão sincronas com o ventilador mecânico.</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoRespiracaoPaciente" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.pressaoCuff">Monitorar pressão do cuff(TOT/TQT)</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoPressaoCuff" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.ritmoCardiaco">Avaliar ritmo cardíaco</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoRitmoCardiaco" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.arritmia">Monitorar o aparecimento de arritmias cardíacas</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoArritmia" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.sangueUrina">Coletar precocemente sangue, urina e secreção traqueal</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoSangueUrina" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.sinaisInfeccao">Monitorar sinais de infecção</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoSinaisInfeccao" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.variacaoPressao">Monitorar variações de frequência cardíaca</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoVariacaoPressao" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.pressaoAtrio">Monitorar pressão de átrio direito e pressão arterial média</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoPressaoAtrio" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.desequilibrioLiquido">Avaliar o desequilíbrio de liquidos e/ou eletrólitos</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoDesequilibrioLiquido" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.sinaisCardiaco">Monitorar sinais e sintomas de débito cardíaco diminuido</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoSinaisCardiaco" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.edema">Verificar presença de edema ou distensão de veia jugular</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoEdema" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.volume">Monitorar a administração de volume para ressucitação volêmica</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoVolume" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.desconforto">Orientar paciente sobre a importância de comunicar qualquer desconforto torácico</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoDesconforto" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.nivelSedacao">Comunicar quando paciente com nível de sedação inadequada</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoNivelSedacao" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.alteracaoPupilares">Comunicar alterações pupilares</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoAlteracaoPupilares" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.conhecidoData">Tornar diariamente conhecido do paciente data e dia da semana</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoConhecidoData" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.circunferenciaAbdominal">Medir circunferência abdominal</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoCircunferenciaAbdominal" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.hidroEletolitico">Monitorar balanço hidroeletrolítico</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoHidroEletolitico" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.extremidadeAcimaNivel">Manter extremidade edemaciada acima do nível do coração</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoExtremidadeAcimaNivel" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.protegerMembro">Proteger membro edemaciado contra lesões</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoProtegerMembro" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.mudancaDecubito">Realizar mudança de decúbito</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoMudancaDecubito" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.ingestaoLiquido">Estimular a ingestão de liquidos</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoIngestaoLiquido" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.sinaisDesidratacao">Monitorar sinais de desidratação</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoSinaisDesidratacao" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.presencaRuidosPulmonar">Monitorar a presença de ruídos adventicios à ausculta pulmonar</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoPresencaRuidosPulmonar" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.pesoCorporalDiminuido">Investigar possíveis causas do peso corporal diminuído</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoPesoCorporalDiminuido" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.refeicoesMenores">Oferecer refeições menores e frequentes</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoRefeicoesMenores" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.residuosGastricos">Avaliar resíduos gástricos antes de administrar dietas por sondas</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoResiduosGastricos" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.gotejamentoSonda">Controlar gotejamento e lavar sonda com água após administração da dieta</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoGotejamentoSonda" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.posicionamentoSng">Observar posicionamento da SNG/SNE/SOG/SOE, comunicar alterações</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoPosicionamentoSng" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.intercalarAlimentacao">Intercalar a oferta de porções da alimentação com breves períodos de oxigênio suplementar</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoIntercalarAlimentacao" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.restringirLiquido">Restringir líquidos com as refeições</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoRestringirLiquido" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.procedimentosDolorosos">Evitar procedimentos dolorosos antes das refeições</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoProcedimentosDolorosos" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.hipolicemia">Monitorar sinais de hipoglicemia ou hiperglicemia</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoHipolicemia" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.alteracaoGlicemia">Comunicar alterações da glicemia capilar</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoAlteracaoGlicemia" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.nutricao">Atentar e comunicar a nutrição alergias ou intolerâncias alimentares informadas pelo paciente</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoNutricao" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.ruidos">Monitorar ruídos hidroaéreos</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoRuidos" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.idaBanheiro">Estimular ida ao banheiro, caso não haja restrição</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoIdaBanheiro" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.fatoresConstipacao">Identificar fatores que contribuam para constipação</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoFatoresConstipacao" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.sangueFezes">Monitorar sangue nas fezes</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoSangueFezes" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.eliminacaoIntestinal">Registrar eliminações intestinais (quantidade, aspecto, coloração e frequencia)</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoEliminacaoIntestinal" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.debitoUrinario">Registrar e controlar débito urinário (quantidade, aspecto, coloração)</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoDebitoUrinario" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                <el-form-item>
                    <el-checkbox v-model="intervencoesEnfermagem.distensaoBexiga">Monitorar grau de distensão da bexiga</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
                <el-form-item>
                    <el-input v-model="intervencoesEnfermagem.aprazamentoDistensaoBexiga" placeholder="Aprazamento">Aprazamento</el-input>
                </el-form-item>
            </el-col>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                    <el-form-item>
                        <el-checkbox v-model="intervencoesEnfermagem.funcionamentoSvd">Avaliar o funcionamento da SVD</el-checkbox>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12">
                    <el-form-item>
                        <el-input v-model="intervencoesEnfermagem.aprazamentoFuncionamentoSvd" placeholder="Aprazamento">Aprazamento</el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                    <el-form-item>
                        <el-checkbox v-model="intervencoesEnfermagem.lateralizarCabeca">Lateralizar cabeça durante vômito</el-checkbox>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12">
                    <el-form-item>
                        <el-input v-model="intervencoesEnfermagem.aprazamentoLateralizarCabeca" placeholder="Aprazamento">Aprazamento</el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                    <el-form-item>
                        <el-checkbox v-model="intervencoesEnfermagem.investigarVomito">Investigar causas para náuse/vomito</el-checkbox>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12">
                    <el-form-item>
                        <el-input v-model="intervencoesEnfermagem.aprazamentoInvestigarVomito" placeholder="Aprazamento">Aprazamento</el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                    <el-form-item>
                        <el-checkbox v-model="intervencoesEnfermagem.mensurarDrenagem">Mensurar, anotar e desprezar drenagens</el-checkbox>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12">
                    <el-form-item>
                        <el-input v-model="intervencoesEnfermagem.aprazamentoMensurarDrenagem" placeholder="Aprazamento">Aprazamento</el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                    <el-form-item>
                        <el-checkbox v-model="intervencoesEnfermagem.mensurarSeloDagua">Mensurar, anotar e desprezar a cada 12 horas mantendo selo d'água com SF 0,9%, comunicar alterações</el-checkbox>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12">
                    <el-form-item>
                        <el-input v-model="intervencoesEnfermagem.aprazamentoMensurarSeloDagua" placeholder="Aprazamento">Aprazamento</el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                    <el-form-item>
                        <el-checkbox v-model="intervencoesEnfermagem.higieneOral">Realizar higiene oral com clorexidene á 0,12% de 6/6</el-checkbox>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12">
                    <el-form-item>
                        <el-input v-model="intervencoesEnfermagem.aprazamentoHigieneOral" placeholder="Aprazamento">Aprazamento</el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                    <el-form-item>
                        <el-checkbox v-model="intervencoesEnfermagem.hidratarPele">Hidratar pele do paciente</el-checkbox>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12">
                    <el-form-item>
                        <el-input v-model="intervencoesEnfermagem.aprazamentoHidratarPele" placeholder="Aprazamento">Aprazamento</el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                    <el-form-item>
                        <el-checkbox v-model="intervencoesEnfermagem.proeminenciasOsseas">Proteger prominências ósseas em cada troca de decúbito e aplicar filme transparente</el-checkbox>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12">
                    <el-form-item>
                        <el-input v-model="intervencoesEnfermagem.aprazamentoProeminenciasOsseas" placeholder="Aprazamento">Aprazamento</el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                    <el-form-item>
                        <el-checkbox v-model="intervencoesEnfermagem.registroFerida">Avaliar e descrever em registro a ferida e pele circuvizinha em cada troca de curativo</el-checkbox>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12">
                    <el-form-item>
                        <el-input v-model="intervencoesEnfermagem.aprazamentoRegistroFerida" placeholder="Aprazamento">Aprazamento</el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                    <el-form-item>
                        <el-checkbox v-model="intervencoesEnfermagem.posicaoConfortavel">Ajudar o paciente a ficar em posição confortável</el-checkbox>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12">
                    <el-form-item>
                        <el-input v-model="intervencoesEnfermagem.aprazamentoPosicaoConfortavel" placeholder="Aprazamento">Aprazamento</el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                    <el-form-item>
                        <el-checkbox v-model="intervencoesEnfermagem.alivioDor">Ensinar medidas não invasivas de alívio da dor</el-checkbox>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12">
                    <el-form-item>
                        <el-input v-model="intervencoesEnfermagem.aprazamentoAlivioDor" placeholder="Aprazamento">Aprazamento</el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                    <el-form-item>
                        <el-checkbox v-model="intervencoesEnfermagem.dorResolucao">Avaliar nível de dor até sua resolução</el-checkbox>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12">
                    <el-form-item>
                        <el-input v-model="intervencoesEnfermagem.aprazamentoDorResolucao" placeholder="Aprazamento">Aprazamento</el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                    <el-form-item>
                        <el-checkbox v-model="intervencoesEnfermagem.dorCronica">Investigar os efeitos da dor crônica sobre a vida do individuo</el-checkbox>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12">
                    <el-form-item>
                        <el-input v-model="intervencoesEnfermagem.aprazamentoDorCronica" placeholder="Aprazamento">Aprazamento</el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                    <el-form-item>
                        <el-checkbox v-model="intervencoesEnfermagem.cursoDor">Explorar as expectativas quanto ao curso da dor, tratamento e aos efeitos colaterais</el-checkbox>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12">
                    <el-form-item>
                        <el-input v-model="intervencoesEnfermagem.aprazamentoCursoDor" placeholder="Aprazamento">Aprazamento</el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                    <el-form-item>
                        <el-checkbox v-model="intervencoesEnfermagem.compressaFria">Aplicar compressas frias</el-checkbox>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12">
                    <el-form-item>
                        <el-input v-model="intervencoesEnfermagem.aprazamentoCompressaFria" placeholder="Aprazamento">Aprazamento</el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                    <el-form-item>
                        <el-checkbox v-model="intervencoesEnfermagem.autocuidadePaciennte">Oferecer assistência para autocuidado até que o paciente esteja capacitado</el-checkbox>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12">
                    <el-form-item>
                        <el-input v-model="intervencoesEnfermagem.aprazamentoAutocuidadoPaciennte" placeholder="Aprazamento">Aprazamento</el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                    <el-form-item>
                        <el-checkbox v-model="intervencoesEnfermagem.fatorAmbiental">Investigar fatores ambientais que dificultem o sono</el-checkbox>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12">
                    <el-form-item>
                        <el-input v-model="intervencoesEnfermagem.aprazamentoFatorAmbiental" placeholder="Aprazamento">Aprazamento</el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                    <el-form-item>
                        <el-checkbox v-model="intervencoesEnfermagem.tempoSono">Limitar o tempo do sono durante o dia</el-checkbox>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12">
                    <el-form-item>
                        <el-input v-model="intervencoesEnfermagem.aprazamentoTempoSono" placeholder="Aprazamento">Aprazamento</el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                    <el-form-item>
                        <el-checkbox v-model="intervencoesEnfermagem.padraoSono">Registrar o padrão de sono e horas dormidas</el-checkbox>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12">
                    <el-form-item>
                        <el-input v-model="intervencoesEnfermagem.aprazamentoPadraoSono" placeholder="Aprazamento">Aprazamento</el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                    <el-form-item>
                        <el-checkbox v-model="intervencoesEnfermagem.cirurgiaSangramento">Monitorar local da cirurrgia quanto a sangramento, deiscência e evisceração</el-checkbox>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12">
                    <el-form-item>
                        <el-input v-model="intervencoesEnfermagem.aprazamentoCirurgiaSangramento" placeholder="Aprazamento">Aprazamento</el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                    <el-form-item>
                        <el-checkbox v-model="intervencoesEnfermagem.areaTossir">Orientar o paciente a apoiar a área ao tossir, espirrar ou vomitar</el-checkbox>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12">
                    <el-form-item>
                        <el-input v-model="intervencoesEnfermagem.aprazamentoAreaTossir" placeholder="Aprazamento">Aprazamento</el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                    <el-form-item>
                        <el-checkbox v-model="intervencoesEnfermagem.respostaTerapeutica">Acompanhar e registrar resposta terapêutica quando administrados</el-checkbox>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12">
                    <el-form-item>
                        <el-input v-model="intervencoesEnfermagem.aprazamentoRespostaTerapeutica" placeholder="Aprazamento">Aprazamento</el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                    <el-form-item>
                        <el-checkbox v-model="intervencoesEnfermagem.conterPaciente">Conter paciente no leito</el-checkbox>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12">
                    <el-form-item>
                        <el-input v-model="intervencoesEnfermagem.aprazamentoConterPaciente" placeholder="Aprazamento">Aprazamento</el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                    <el-form-item>
                        <el-checkbox v-model="intervencoesEnfermagem.expectativaPaciente">Avaliar o conhecimento e expectativas do paciente</el-checkbox>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12">
                    <el-form-item>
                        <el-input v-model="intervencoesEnfermagem.aprazamentoExpectativaPaciente" placeholder="Aprazamento">Aprazamento</el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                    <el-form-item>
                        <el-checkbox v-model="intervencoesEnfermagem.diminuirAnsiedade">Ensinar atividades que diminuam ansiedade</el-checkbox>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12">
                    <el-form-item>
                        <el-input v-model="intervencoesEnfermagem.aprazamentoDiminuirAnsiedade" placeholder="Aprazamento">Aprazamento</el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                    <el-form-item>
                        <el-checkbox v-model="intervencoesEnfermagem.medoPaciente">Realizar escuta das necessidades e medo do paciente</el-checkbox>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12">
                    <el-form-item>
                        <el-input v-model="intervencoesEnfermagem.aprazamentoMedoPaciente" placeholder="Aprazamento">Aprazamento</el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                    <el-form-item>
                        <el-checkbox v-model="intervencoesEnfermagem.informacaoCorreta">Oferecer informações corretas, usando termos simples</el-checkbox>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12">
                    <el-form-item>
                        <el-input v-model="intervencoesEnfermagem.aprazamentoInformacaoCorreta" placeholder="Aprazamento">Aprazamento</el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" class="check">
                    <el-form-item>
                        <el-checkbox v-model="intervencoesEnfermagem.apoioEspiritual">Promover apoio espiritual</el-checkbox>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12">
                    <el-form-item>
                        <el-input v-model="intervencoesEnfermagem.aprazamentoApoioEspiritual" placeholder="Aprazamento">Aprazamento</el-input>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-row>
    </el-card>
</template>

<script>
export default {
    props: {
        intervencoesEnfermagem: {
            type: Object
        }
    }
}
</script>

