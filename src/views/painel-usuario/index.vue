<template>
    <div class="app-container">
        <el-row :gutter="20">
            <el-col :span="12" :xs="24">
                <el-card style="margin-bottom:20px;">
                    <div slot="header" class="clearfix">
                        <span>Sobre</span>
                    </div>

                    <div class="user-profile">
                        <div class="box-center">
                            <img src="https://via.placeholder.com/80" class="user-avatar">
                        </div>
                        <div class="box-center">
                            <div class="user-name text-center">Nome</div>
                            <div class="user-role text-center text-muted">Permissão</div>
                        </div>
                    </div>

                    <div class="user-bio">
                        <div class="user-education user-bio-section">
                            <div class="user-bio-section-header"><svg-icon icon-class="education" /><span>Alterar senha</span></div>
                            <div class="user-bio-section-body">
                                <el-form ref="dataForm" :model="alterarSenha" :rules="rules" size="mini" label-position="top">
                                    <el-col :xs="24" :sm="24" :md="24" :lg="24">
                                        <el-form-item label="Senha atual" prop="senhaAtual">
                                            <el-input v-model="alterarSenha.senhaAtual" type="password"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :xs="24" :sm="24" :md="24" :lg="24">
                                        <el-form-item label="Senha Nova" prop="senhaNova">
                                            <el-input v-model="alterarSenha.senhaNova" type="password"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-row style="float: right;">
                                        <el-button type="primary" @click="submitForm()">
                                            Salvar
                                        </el-button>
                                    </el-row>
                                </el-form>
                            </div>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { getToken } from "@/utils/auth"
import { update } from "@/api/base"

export default {
    props: {
        user: {
            type: Object,
            default: () => {
                return {
                    name: '',
                    email: '',
                    avatar: '',
                    role: ''
                }
            }
        }
    },
    data() {
        return {
            alterarSenha: {
                senhaAtual: '',
                senhaNova: ''
            },
            rules: {
                senhaAtual: [
                    { required: true, trigger: 'blur', message: 'Campo obrigatório' },
                    { min: 6, message: 'Senha deve conter no minimo 6 caracteres', trigger: 'blur' }
                ],
                senhaNova: [
                    { required: true, trigger: 'blur', message: 'Campo obrigatório' },
                    { min: 6, message: 'Senha deve conter no minimo 6 caracteres', trigger: 'blur' }
                ]
            },
        }
    },
    methods: {
        submitForm() {
            this.$confirm('Deseja alterar a senha?', '', {
                confirmButtonText: 'Sim',
                cancelButtonText: 'Não',
                type: 'warning'
            }).then(() => {
                this.$refs['dataForm'].validate((valid) => {
                    if (valid) {
                        update(`auth/${getToken()}`, this.alterarSenha)
                            .then(response => {
                                this.$notify({
                                    title: 'Successo',
                                    message: 'Senha alterada com sucesso',
                                    type: 'success',
                                    duration: 2000
                                })
                            })
                            .catch(() => {
                                this.$notify({
                                    title: 'Falha',
                                    message: 'Ocorreu um erro ao tentar alterar a senha. Tente novamente em alguns instantes.',
                                    type: 'error',
                                    duration: 5000
                                })
                            });
                    }
                })
            })
        },
    }
}
</script>

<style lang="scss" scoped>
.box-center {
    margin: 0 auto;
    display: table;
}

.text-muted {
    color: #777;
}

.user-profile {
    .user-name {
        font-weight: bold;
    }

    .box-center {
        padding-top: 10px;
    }

    .user-role {
        padding-top: 10px;
        font-weight: 400;
        font-size: 14px;
    }

    .box-social {
        padding-top: 30px;

        .el-table {
            border-top: 1px solid #dfe6ec;
        }
    }

    .user-follow {
        padding-top: 20px;
    }
}

.user-bio {
    margin-top: 20px;
    color: #606266;

    span {
        padding-left: 4px;
    }

    .user-bio-section {
        font-size: 14px;
        padding: 15px 0;

        .user-bio-section-header {
            border-bottom: 1px solid #dfe6ec;
            padding-bottom: 10px;
            margin-bottom: 10px;
            font-weight: bold;
        }
    }
}
</style>
