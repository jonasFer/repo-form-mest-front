<template>
    <el-card>
        <el-row :gutter="20">
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item label="Estado nutricional">
                    <el-select v-model="alimentacaoEliminacaoIntestinal.estadoNutricional">
                        <el-option label="Normal" value="1"></el-option>
                        <el-option label="Obeso" value="2"></el-option>
                        <el-option label="Emagrecido" value="3"></el-option>
                        <el-option label="Desnutrido" value="4"></el-option>
                        <el-option label="Peso corporal" value="5"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="3">
                <el-form-item label="Peso corporal">
                    <el-input v-model="alimentacaoEliminacaoIntestinal.pesoCorporal"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <el-form-item label="Dieta"/>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="3">
                <el-form-item>
                    <el-checkbox v-model="alimentacaoEliminacaoIntestinal.dietaSuspensa">Suspensa</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="3">
                <el-form-item>
                    <el-checkbox v-model="alimentacaoEliminacaoIntestinal.dietaOral">Oral</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="3">
                <el-form-item>
                    <el-checkbox v-model="alimentacaoEliminacaoIntestinal.npt">NPT</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="3" v-if="alimentacaoEliminacaoIntestinal.npt === true">
                <el-form-item>
                    <el-input
                        v-model="alimentacaoEliminacaoIntestinal.nptMlh"
                        placeholder="ml/h"
                    ></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="3">
                <el-form-item>
                    <el-checkbox v-model="alimentacaoEliminacaoIntestinal.ne">NE</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="3" v-if="alimentacaoEliminacaoIntestinal.ne === true">
                <el-form-item>
                    <el-input
                        v-model="alimentacaoEliminacaoIntestinal.neMlh"
                        placeholder="ml/h"
                    />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="12" :sm="7" :md="5" :lg="4">
                <el-form-item label="Estado nutricional">
                    <el-select v-model="alimentacaoEliminacaoIntestinal.aceitacao">
                        <el-option label="Boa" value="1"></el-option>
                        <el-option label="Regular" value="2"></el-option>
                        <el-option label="Insuficiente" value="3"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="4">
                <el-form-item label="HGT (mg/dl)">
                    <el-input v-model="alimentacaoEliminacaoIntestinal.hgt"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="4">
                <el-form-item label="Intolerancia alimentar">
                    <el-select v-model="alimentacaoEliminacaoIntestinal.intoleranciaAlimentar">
                        <el-option label="Sim" value="1"></el-option>
                        <el-option label="Não" value="0"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="4">
                <el-form-item label="Tipo sonda">
                    <el-select v-model="alimentacaoEliminacaoIntestinal.tipoSonda">
                        <el-option label="SNG" value="1"></el-option>
                        <el-option label="SOG" value="2"></el-option>
                        <el-option label="SNE" value="3"></el-option>
                        <el-option label="SOE" value="4"></el-option>
                        <el-option label="Gastrostomia" value="5"></el-option>
                        <el-option label="Jejunostomia" value="6"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="4">
                <el-form-item label="HGT (mg/dl)">
                    <el-input v-model="alimentacaoEliminacaoIntestinal.descricaoVomito"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="4">
                <el-form-item label="Drenagem gástrica">
                    <el-select v-model="alimentacaoEliminacaoIntestinal.drenagemGastrica">
                        <el-option label="Sim" value="1"></el-option>
                        <el-option label="Não" value="0"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="4">
                <el-form-item label="HGT (mg/dl)">
                    <el-input v-model="alimentacaoEliminacaoIntestinal.caracteristicaDrenagem"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="4">
                <el-form-item label="Abdome">
                    <el-select v-model="alimentacaoEliminacaoIntestinal.abdome">
                        <el-option label="Plano" value="1"></el-option>
                        <el-option label="Flácido" value="2"></el-option>
                        <el-option label="Tenso" value="3"></el-option>
                        <el-option label="Globoso" value="4"></el-option>
                        <el-option label="Distendido" value="5"></el-option>
                        <el-option label="Ascítico" value="6"></el-option>
                        <el-option label="Doloroso à palpitação" value="7"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="4">
                <el-form-item label="Eliminação intestinal">
                    <el-select v-model="alimentacaoEliminacaoIntestinal.eliminacaoIntestinal">
                        <el-option label="Plano" value="1"></el-option>
                        <el-option label="Flácido" value="2"></el-option>
                        <el-option label="Tenso" value="3"></el-option>
                        <el-option label="Globoso" value="4"></el-option>
                        <el-option label="Distendido" value="5"></el-option>
                        <el-option label="Ascítico" value="6"></el-option>
                        <el-option label="Doloroso à palpitação" value="7"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="4">
                <el-form-item label="Caracteristicas das fezes">
                    <el-input v-model="alimentacaoEliminacaoIntestinal.caracteristicaFezes"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="12" :sm="7" :md="5" :lg="4">
                <el-form-item>
                    <el-checkbox v-model="alimentacaoEliminacaoIntestinal.nausea">Presença de náusea</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="4">
                <el-form-item>
                    <el-checkbox v-model="alimentacaoEliminacaoIntestinal.vomito">Presença de Vômito</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="7" :md="5" :lg="5">
                <el-form-item>
                    <el-checkbox v-model="alimentacaoEliminacaoIntestinal.laxante">Uso de laxantes e catárticos</el-checkbox>
                </el-form-item>
            </el-col>
        </el-row>
    </el-card>
</template>

<script>
export default {
  props: {
    alimentacaoEliminacaoIntestinal: {
      type: Object
    }
  }
}
</script>

<style>

</style>
