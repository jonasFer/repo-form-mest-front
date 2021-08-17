<template>
    <el-row :gutter="20">
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item label="Estado de hidratação">
                <el-select v-model="hidratacaoEliminacaoVesical.estadoHidratacao">
                    <el-option label="Hidratado" value="1"></el-option>
                    <el-option label="Desidratado" value="2"></el-option>
                    <el-option label="Sede" value="3"></el-option>
                    <el-option label="Lábios ressecados e fedidos" value="4"></el-option>
                    <el-option label="Língua seca" value="5"></el-option>
                </el-select>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item label="Tugor da pele">
                <el-select v-model="hidratacaoEliminacaoVesical.tugorPele">
                    <el-option label="Preservado" value="1"></el-option>
                    <el-option label="Diminuido" value="2"></el-option>
                </el-select>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item label="Condições mucosas">
                <el-select v-model="hidratacaoEliminacaoVesical.condicaoMucosa">
                    <el-option label="Úmidas" value="1"></el-option>
                    <el-option label="Ressecadas" value="2"></el-option>
                </el-select>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item>
                <el-checkbox v-model="hidratacaoEliminacaoVesical.edemaPes">Pés</el-checkbox>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item label="Pés">
                <el-input v-model="hidratacaoEliminacaoVesical.descricaoEdemaPes"></el-input>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item>
                <el-checkbox v-model="hidratacaoEliminacaoVesical.edemaMMII">MMII</el-checkbox>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item label="MMII">
                <el-input v-model="hidratacaoEliminacaoVesical.descricaoEdemaMMII"></el-input>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item>
                <el-checkbox v-model="hidratacaoEliminacaoVesical.edemaMMSS">MMSS</el-checkbox>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item label="MMSS">
                <el-input v-model="hidratacaoEliminacaoVesical.descricaoEdemaMMSS"></el-input>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item>
                <el-checkbox v-model="hidratacaoEliminacaoVesical.ansarca">Ansarca</el-checkbox>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item label="Eliminacao Urinaria">
                <el-select v-model="hidratacaoEliminacaoVesical.eliminacaoUrinaria">
                    <el-option label="Espontânea" value="1"></el-option>
                    <el-option label="Retenção" value="2"></el-option>
                    <el-option label="Incontinência" value="3"></el-option>
                    <el-option label="SVD" value="4"></el-option>
                    <el-option label="Cistonomia" value="5"></el-option>
                </el-select>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item label="descricaoEliminacaoUrinaria">
                <el-input v-model="hidratacaoEliminacaoVesical.descricaoEliminacaoUrinaria"></el-input>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item label="Volume">
                <el-input v-model="hidratacaoEliminacaoVesical.volume"></el-input>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item>
                <el-checkbox v-model="hidratacaoEliminacaoVesical.oliguria">Oligúria</el-checkbox>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item>
                <el-checkbox v-model="hidratacaoEliminacaoVesical.anuria">Anúria</el-checkbox>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item>
                <el-checkbox v-model="hidratacaoEliminacaoVesical.poliura">Poliúria</el-checkbox>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item>
                <el-checkbox v-model="hidratacaoEliminacaoVesical.polaciuria">Polaciúria</el-checkbox>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item>
                <el-checkbox v-model="hidratacaoEliminacaoVesical.disuria">Disúria</el-checkbox>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item>
                <el-checkbox v-model="hidratacaoEliminacaoVesical.hematuria">Hematúria</el-checkbox>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item>
                <el-checkbox v-model="hidratacaoEliminacaoVesical.coluria">Colúria</el-checkbox>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item label="Outros">
                <el-input v-model="hidratacaoEliminacaoVesical.outro"></el-input>
            </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="7" :md="5" :lg="5">
            <el-form-item label="Caracteristica da Urina">
                <el-input v-model="hidratacaoEliminacaoVesical.caracteristicaUrina"></el-input>
            </el-form-item>
        </el-col>
    </el-row>
</template>

<script>
export default {
    props: {
        hidratacaoEliminacaoVesical: {
            type: Object
        }
    }
}
</script>

<style>

</style>