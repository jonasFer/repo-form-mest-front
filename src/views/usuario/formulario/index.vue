<template>
    <div class=app-container>
        <el-form ref="formUser" :rules="rules" :model="usuario" size="mini" label-position="top">
            <el-row :gutter="20">
                <el-col :xs="24" :sm="24" :md="24" :lg="24">
                    <el-form-item label="Email" prop="email">
                        <el-input v-model="usuario.email"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="24" :md="24" :lg="24">
                    <el-form-item label="Senha" v-if="!isEdit">
                        <el-input v-model="usuario.senha"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row style="float: right;">
                <br><br>
                <router-link :to="{ name: 'usuario' }">
                    <el-button>
                        Voltar
                    </el-button>
                </router-link>
                <el-button type="primary" @click="submitForm()">
                    Salvar
                </el-button>
            </el-row>
        </el-form>
    </div>
</template>

<script>
import { byId, create, update } from '@/api/base';

export default {
    data() {
        const validateEmail = (rule, value, callback) => {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(value)) {
                callback(new Error('Por favor insira um email válido.'))
            } else {
                callback()
            }
        }
        return {
            usuario: {
                id: null,
                email: '',
                senha: ''
            },
            rules: {
                email: [
                    { required: true, trigger: 'blur', message: 'Email é obrigatório' },
                    { validator: validateEmail, trigger: 'blur' }
                ],
                senha: [
                    { required: true, trigger: 'blur' },
                    { min: 6, message: 'Senha deve conter no minimo 6 caracteres', trigger: 'blur' }
                ]
            },
            id: 0,
            isEdit: false
        }
    },
    activated() {
        const route = this.$route
        this.id = 0
        this.isEdit = false
        if (route.name == 'edit-usuario') {
            this.isEdit = true
            this.id = route.params.id
            this.getUsuario(this.id);
        }
    },
    methods: {
        getUsuario(id) {
            byId(`/usuario/${id}`).then(response => {
                this.usuario = response.data
            })
        },
        submitForm() {
            this.$refs['formUser'].validate((valid) => {
                if (valid) {
                    console.log('valid')
                    this.$confirm('Deseja salvar os dados do usuário?', '', {
                        confirmButtonText: 'Sim',
                        cancelButtonText: 'Não',
                        type: 'warning'
                    }).then(() => {
                        if (this.isEdit) {
                            this.updateUsuario(this.id)
                            return
                        }

                        this.createUsuario()
                    })
                } else {
                    this.$alert('Existem campos obrigatórios não preenchidos', {
                        confirmButtonText: 'OK'
                    });
                }
            })

        },
        createUsuario() {
            create('usuario', this.usuario)
                .then(response => {
                    this.$notify({
                        title: 'Successo',
                        message: 'Cadastrado com sucesso',
                        type: 'success',
                        duration: 2000
                    })

                    this.$router.push({ name: 'usuario' })
                })
                .catch(() => {
                    this.$notify({
                        title: 'Falha',
                        message: 'Ocorreu um erro ao tentar salvar o usuário. Tente novamente em alguns instantes.',
                        type: 'error',
                        duration: 5000
                    })
                });
        },
        updateUsuario(id) {
            update(`/usuario/${id}`, this.usuario)
                .then(response => {
                    this.$notify({
                        title: 'Successo',
                        message: 'Salvo com sucesso',
                        type: 'success',
                        duration: 2000
                    })

                    this.$router.push({ name: 'usuario' })
                })
                .catch(() => {
                    this.$notify({
                        title: 'Falha',
                        message: 'Ocorreu um erro ao tentar salvar o prontuário. Tente novamente em alguns instantes.',
                        type: 'error',
                        duration: 5000
                    })
                });
        }
    }
}
</script>

<style scoped>

</style>
