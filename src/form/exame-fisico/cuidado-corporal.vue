<template>
    <el-card>
        <el-row :gutter="20">
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item label="Dificuldade no autocuidado">
                    <el-select v-model="cuidadoCorporal.dependenciaAutocuidado">
                        <el-option label="Sim" value="1"></el-option>
                        <el-option label="Não" value="0"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item label="Tipo">
                    <el-select v-model="cuidadoCorporal.tipoDificuldade">
                        <el-option label="Alimentar-se" value="1"></el-option>
                        <el-option label="Ir ao banheiro" value="2"></el-option>
                        <el-option label="Tomar banho" value="3"></el-option>
                        <el-option label="Vestir-se" value="4"></el-option>
                        <el-option label="Tomar o remédio" value="5"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item label="Grau">
                    <el-select v-model="cuidadoCorporal.grauDificuldade">
                        <el-option label="Total" value="1"></el-option>
                        <el-option label="Parcial" value="2"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item label="Higiene corporal">
                    <el-select v-model="cuidadoCorporal.higieneCorporal">
                        <el-option label="Preservada" value="1"></el-option>
                        <el-option label="Prejudicada" value="2"></el-option>
                        <el-option label="Exala odores desagrádaveis" value="3"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item label="Higiene bucal">
                    <el-select v-model="cuidadoCorporal.higieneBucal">
                        <el-option label="Preservada" value="1"></el-option>
                        <el-option label="Gengivite" value="2"></el-option>
                        <el-option label="Falhas dentárias" value="3"></el-option>
                        <el-option label="Próteses dentárias" value="4"></el-option>
                        <el-option label="Lesões" value="5"></el-option>
                        <el-option label="Língua saburrosa" value="6"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item label="Couro cabeludo">
                    <el-select v-model="cuidadoCorporal.couroCabeludo">
                        <el-option label="Limpo" value="1"></el-option>
                        <el-option label="Sujo" value="2"></el-option>
                        <el-option label="Pediculose" value="3"></el-option>
                        <el-option label="Lesões" value="4"></el-option>
                        <el-option label="Seborreia" value="5"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="cuidadoCorporal.peleIntegra">Integra</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="cuidadoCorporal.peleFria">Fria</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="cuidadoCorporal.peleAquecida">Aquecida</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="cuidadoCorporal.peleCorada">Corada</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="cuidadoCorporal.hipocorada">Hipocorada</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="cuidadoCorporal.cianotica">Cianotica</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="cuidadoCorporal.icterica">Ictérica</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="cuidadoCorporal.sudorese">Sudorese</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="cuidadoCorporal.prurido">Prurido</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="cuidadoCorporal.hiperemia">Hiperemia</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="cuidadoCorporal.cicatriz">Cicatrizes</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="cuidadoCorporal.petequia">Petéquias</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="cuidadoCorporal.equimose">Equimoses</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="cuidadoCorporal.hematoma">Hematomas</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item label="UP">
                    <el-select v-model="cuidadoCorporal.up">
                        <el-option label="Estágio I" value="1"></el-option>
                        <el-option label="Estágio II" value="2"></el-option>
                        <el-option label="Estágio III" value="3"></el-option>
                        <el-option label="Estágio IV" value="4"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item label="Catacteristicas">
                    <el-input v-model="cuidadoCorporal.caracteristicaCicatrizacao"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item label="Tratamento/curativo">
                    <el-input v-model="cuidadoCorporal.tratamento"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item label="Lesões">
                    <el-input v-model="cuidadoCorporal.lesoes"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
    </el-card>
</template>

<script>
export default {
    props: {
        cuidadoCorporal: {
            type: Object
        }
    }
}
</script>

<style>

</style>