<template>
    <el-card>
        <el-row :gutter="20">
            <el-col :xs="8" :sm="6" :md="5" :lg="3">
                <el-form-item label="Ventilação">
                    <el-checkbox v-model="oxigenacao.espontanea">Espontânea</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col  :xs="16" :sm="8" :md="8" :lg="3">
                <el-form-item label="O² suplementar(L/min)">
                    <el-input v-model="oxigenacao.o2Suplementar"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="8" :md="5" :lg="3">
                <el-form-item label=" " class="m-t">
                    <el-checkbox v-model="oxigenacao.canulaNasal">Canula nasal</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="8" :md="5" :lg="3">
                <el-form-item label=" " class="m-t">
                    <el-checkbox v-model="oxigenacao.mascaraSimples">Máscara Simples</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="8" :md="5" :lg="3">
                <el-form-item label=" " class="m-t">
                    <el-checkbox v-model="oxigenacao.mascaraVenturi">Máscara Venturi</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="8" :md="5" :lg="3">
                <el-form-item label=" " class="m-t">
                    <el-checkbox v-model="oxigenacao.mascaraReservatorio">Máscara Reservatório</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="8" :md="5" :lg="3">
                <el-form-item label=" " class="m-t">
                    <el-checkbox v-model="oxigenacao.macronebulizacao">Macronebulizacao</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="8" :md="5" :lg="3">
                <el-form-item label=" " class="m-t">
                    <el-checkbox v-model="oxigenacao.vmi">VMI</el-checkbox>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="8" :sm="7" :md="5" :lg="2">
                <el-form-item label="Protese">
                    <el-checkbox v-model="oxigenacao.tot">TOT</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="6" :sm="7" :md="5" :lg="2">
                <el-form-item label=" " class="m-t">
                    <el-checkbox v-model="oxigenacao.tqt">TQT</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="4" :sm="7" :md="5" :lg="1" v-if="oxigenacao.tqt == true">
                <el-form-item label="° dia">
                    <el-input v-model="oxigenacao.tqtDescricao"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="8" :sm="7" :md="5" :lg="2">
                <el-form-item label="FiO²">
                    <el-input v-model="oxigenacao.fio2"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="8" :sm="7" :md="5" :lg="2">
                <el-form-item label="SpO²">
                    <el-input v-model="oxigenacao.spo2"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="8" :sm="7" :md="5" :lg="2">
                <el-form-item label="FR">
                    <el-input v-model="oxigenacao.fr"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="8" :sm="7" :md="5" :lg="2">
                <el-form-item label=" " class="m-t">
                    <el-checkbox v-model="oxigenacao.ortopneia">Ortopneia</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="8" :sm="7" :md="5" :lg="3">
                <el-form-item label=" " class="m-t">
                    <el-checkbox v-model="oxigenacao.cheyneStokes">Cheyne-Stokes</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="8" :sm="7" :md="5" :lg="2">
                <el-form-item label=" " class="m-t">
                    <el-checkbox v-model="oxigenacao.kussmaul">Kussmaul</el-checkbox>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="12" :sm="7" :md="5" :lg="4">
                <el-form-item label="Expansibilidade torácica">
                    <el-select v-model="oxigenacao.expansibilidadeToracica">
                        <el-option label="Simétrica" value="1"></el-option>
                        <el-option label="Assimétrica" value="2"></el-option>
                        <el-option label="Aumentada" value="3"></el-option>
                        <el-option label="Diminuída" value="4"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="4">
                <el-form-item label="Auscuta pulmonar MV">
                    <el-select v-model="oxigenacao.auscutaPulmonar">
                        <el-option label="Aumentados" value="1"></el-option>
                        <el-option label="Diminuidos" value="2"></el-option>
                        <el-option label="Ausentes" value="3"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="4">
                <el-form-item label="Ruídos adventicíos">
                    <el-select v-model="oxigenacao.ruidosAdventicios">
                        <el-option label="Roncos" value="1"></el-option>
                        <el-option label="Sibilos" value="2"></el-option>
                        <el-option label="Estertores" value="3"></el-option>
                        <el-option label="Congestão pulmonar" value="4"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="4">
                <el-form-item label="Tosse">
                    <el-select v-model="oxigenacao.tosse">
                        <el-option label="Improdutiva" value="1"></el-option>
                        <el-option label="Produtiva" value="2"></el-option>
                        <el-option label="Expectoração" value="3"></el-option>
                        <el-option label="Aspiração" value="4"></el-option>
                        <el-option label="Fluida" value="5"></el-option>
                        <el-option label="Espessa" value="6"></el-option>
                        <el-option label="Sanguinolenta" value="7"></el-option>
                        <el-option label="Purulenta" value="8"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="4">
                <el-form-item label="Drenagem torácica">
                    <el-select v-model="oxigenacao.drenagemToracica" @change="changeDrenagemToracica($event)">
                        <el-option label="Sim" value="1"></el-option>
                        <el-option label="Não" value="0"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="4">
                <el-form-item label="° dia" v-if="exibeObsDrenagemToracica">
                    <el-input v-model="oxigenacao.descricaoDrenagemToracica"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="5" :sm="7" :md="5" :lg="1">
                <el-form-item label=" " class="m-t">
                    <el-checkbox v-model="oxigenacao.drenagemToracicaD">D</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="5" :sm="7" :md="5" :lg="1">
                <el-form-item label=" " class="m-t">
                    <el-checkbox v-model="oxigenacao.drenagemToracicaE">E</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="24">
                <el-form-item label="Características">
                    <el-input v-model="oxigenacao.drenagemToracicaCaracteristica"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <el-form-item label="Gasometria arterial">
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="4" :lg="3">
                <el-form-item label="Hora" class="m-t-">
                    <el-input v-model="oxigenacao.gasometriaHora"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="4" :lg="3">
                <el-form-item label="pH" class="m-t-">
                    <el-input v-model="oxigenacao.gasometriaPh"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="4" :lg="3">
                <el-form-item label="PaCO²" class="m-t-">
                    <el-input v-model="oxigenacao.gasometriaPaco2"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="4" :lg="3">
                <el-form-item label="PaO²" class="m-t-">
                    <el-input v-model="oxigenacao.gasometriaPao2"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="4" :lg="3">
                <el-form-item label="HCO³" class="m-t-">
                    <el-input v-model="oxigenacao.gasometriaHco3"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="4" :lg="3">
                <el-form-item label="BE" class="m-t-">
                    <el-input v-model="oxigenacao.gasometriaBe"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="6" :md="4" :lg="3">
                <el-form-item label="SO²" class="m-t-">
                    <el-input v-model="oxigenacao.gasometriaSo2"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
    </el-card>
</template>

<script>
export default {
    props: {
        oxigenacao: {
            type: Object
        }
    },
    data() {
        return {
            exibeObsDrenagemToracica: false
        }
    },
    methods: {
        changeDrenagemToracica(value) {
            this.exibeObsDrenagemToracica = value == 1 ? true : false
        }
    }
}
</script>

<style>
.m-t {
    margin-top: 16px;
}

.m-t- {
    margin-top: -12px;
}
</style>