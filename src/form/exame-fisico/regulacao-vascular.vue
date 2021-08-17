<template>
    <el-row :gutter="20">
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item label="Ausculta Cardíaca">
                <el-select v-model="regulacaoVascular.auscultaCardiaca">
                    <el-option label="Sons cardíacos normais" value="1"></el-option>
                    <el-option label="Sons cardíacos anormais" value="2"></el-option>
                </el-select>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item label="Arritimias">
                <el-select v-model="regulacaoVascular.arritmia">
                    <el-option label="Sim" value="true"></el-option>
                    <el-option label="Não" value="false"></el-option>
                </el-select>
            </el-form-item>
        </el-col>
        <el-col  :xs="12" :sm="8" :md="8" :lg="4">
            <el-form-item label="Tipo">
                <el-input v-model="regulacaoVascular.tipoArritimia"></el-input>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item label="Pulso">
                <el-select v-model="regulacaoVascular.pulso">
                    <el-option label="Regular" value="1"></el-option>
                    <el-option label="Irregular" value="2"></el-option>
                    <el-option label="Impalpável" value="3"></el-option>
                    <el-option label="Cheio" value="4"></el-option>
                    <el-option label="Filiforme" value="5"></el-option>
                </el-select>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item label="Perfusão periférica">
                <el-select v-model="regulacaoVascular.perfusao">
                    <el-option label="Preservada" value="1"></el-option>
                    <el-option label="Diminuída" value="2"></el-option>
                </el-select>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item label="Acesso venoso">
                <el-select v-model="regulacaoVascular.acessoVenoso">
                    <el-option label="Central" value="1"></el-option>
                    <el-option label="Periférico" value="2"></el-option>
                    <el-option label="Flebotomia" value="3"></el-option>
                </el-select>
            </el-form-item>
        </el-col>
        <el-col  :xs="12" :sm="8" :md="8" :lg="4">
            <el-form-item label="Descrição">
                <el-input v-model="regulacaoVascular.descricaoAcessoVenoso"></el-input>
            </el-form-item>
        </el-col>
        <el-col  :xs="12" :sm="8" :md="8" :lg="4">
            <el-form-item label="Complicões do acesso">
                <el-input v-model="regulacaoVascular.complicacaoAcesso"></el-input>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item>
                <el-checkbox v-model="regulacaoVascular.drogaVasoativa">Drogas vasoativas</el-checkbox>
            </el-form-item>
        </el-col>
        <el-col  :xs="12" :sm="8" :md="8" :lg="4">
            <el-form-item label="vasoativas">
                <el-input v-model="regulacaoVascular.descricaoDrogaVasoativa"></el-input>
            </el-form-item>
        </el-col>
        <el-col  :xs="12" :sm="8" :md="8" :lg="4">
            <el-form-item label="Dose(ml/h)">
                <el-input v-model="regulacaoVascular.doseDrogaVasoativa"></el-input>
            </el-form-item>
        </el-col>
        <el-col  :xs="12" :sm="8" :md="8" :lg="4">
            <el-form-item label="vasoativas">
                <el-input v-model="regulacaoVascular.descricaoDrogaVasoativa2"></el-input>
            </el-form-item>
        </el-col>
        <el-col  :xs="12" :sm="8" :md="8" :lg="4">
            <el-form-item label="Dose(ml/h)">
                <el-input v-model="regulacaoVascular.doseDrogaVasoativa2"></el-input>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item>
                <el-checkbox v-model="regulacaoVascular.ingurgitamento">Ingurgitamento jugular</el-checkbox>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item label="Marcapasso">
                <el-select v-model="regulacaoVascular.marcapasso">
                    <el-option label="Sim" value="true"></el-option>
                    <el-option label="Não" value="false"></el-option>
                </el-select>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item label="Cateter Swan Ganz">
                <el-select v-model="regulacaoVascular.cateter">
                    <el-option label="Sim" value="1"></el-option>
                    <el-option label="Não" value="2"></el-option>
                    <el-option label="Outro" value="3"></el-option>
                </el-select>
            </el-form-item>
        </el-col>
        <el-col  :xs="12" :sm="8" :md="8" :lg="4">
            <el-form-item label="Outro">
                <el-input v-model="regulacaoVascular.outroCateter"></el-input>
            </el-form-item>
        </el-col>
        <el-col  :xs="12" :sm="8" :md="8" :lg="4">
            <el-form-item label="FC(bpm)">
                <el-input v-model="regulacaoVascular.dadosFisiologicosFc"></el-input>
            </el-form-item>
        </el-col>
        <el-col  :xs="12" :sm="8" :md="8" :lg="4">
            <el-form-item label="PA(mmHg)">
                <el-input v-model="regulacaoVascular.dadosFisiologicosPa"></el-input>
            </el-form-item>
        </el-col>
        <el-col  :xs="12" :sm="8" :md="8" :lg="4">
            <el-form-item label="PAM(mmHg)">
                <el-input v-model="regulacaoVascular.dadosFisiologicosPam"></el-input>
            </el-form-item>
        </el-col>
        <el-col  :xs="12" :sm="8" :md="8" :lg="4">
            <el-form-item label="PVC(cmH²O)">
                <el-input v-model="regulacaoVascular.dadosFisiologicosPvc"></el-input>
            </el-form-item>
        </el-col>
    </el-row>
</template>

<script>
export default {
    props: {
        regulacaoVascular: {
            type: Object
        }
    }
}
</script>

<style>

</style>