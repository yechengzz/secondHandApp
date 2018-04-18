<template>
    <div class="container">
        <NavMenu></NavMenu>
        <div class="line"></div>
        <el-tabs :tab-position="tabPosition">
            <el-tab-pane label="我的贰货">
                <div class="list">
                    <ul>
                        <li v-for="product in products" :key="product.id">
                            <router-link :to="`detail/${product.product_id}`">
                                <div class="clearFix">
                                    <div class="fl">
                                        <img :src="src" alt="">
                                    </div>
                                    <div class="fr">
                                        <h2>{{ product.product_title }}</h2>
                                        <p>{{ product.product_intro }}</p>
                                        <h4>￥{{ product.product_price }}</h4>
                                    </div>
                                </div>
                            </router-link>
                            <el-button type="warning" style="position: absolute; right: 30px; top: 80px;" @click="changeState(product.product_id)">上/下架</el-button>
                        </li>
                    </ul>
                </div>
            </el-tab-pane>
            <el-tab-pane label="上架贰货">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" label-position="right">
                    <el-form-item label="商品名" prop="title">
                        <el-input type="text" v-model="ruleForm.title" auto-complete="off" maxlength="16"></el-input>
                    </el-form-item>
                    <el-form-item label="价格" prop="price">
                        <el-input type="text" v-model="ruleForm.price" auto-complete="off" maxlength="11" onkeyup="value=value.replace(/[^\d|'.']/g,'')"></el-input>
                    </el-form-item>
                    <el-form-item label="数量" prop="num">
                        <el-input type="phone" v-model="ruleForm.num" auto-complete="off" maxlength="11" onkeyup="value=value.replace(/[^\d]/g,'')"></el-input>
                    </el-form-item>
                    <el-form-item label="商品介绍" prop="intro">
                        <el-input type="textarea" v-model="ruleForm.intro" auto-complete="off" maxlength="256" :autosize="{minRows: 8, maxRows: 10}"></el-input>
                    </el-form-item>
                    <el-form-item label="商品图片" prop="img">
                        <el-upload
                            class="upload-demo"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :on-exceed="handleExceed"
                            list-type="picture"
                            :auto-upload="false"
                            :multiple="false"
                            :limit="1">
                            <el-button size="small" type="primary">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="success" @click="submitForm('ruleForm')" :disabled="btnState">上架</el-button>
                        <el-button @click="resetForm('ruleForm2')">重置</el-button>
                    </el-form-item>
                </el-form>
                
            </el-tab-pane>
        </el-tabs>
        <div class="line2"></div>
        <FixedTools></FixedTools>
        <Footer></Footer>
    </div>
</template>

<script>
    import NavMenu from '../common/Navmenu.vue';
    import Footer from '../common/Footer.vue';
    import FixedTools from '../common/Fixedtools.vue'
    import axios from 'axios'

    export default{
        data(){
            var validateTitle = (rule, value, callback) => {
                if(value === ''){
                    callback(new Error('商品名不能为空'));
                }
                else{
                    callback();
                }
            }
            var validatePrice = (rule, value, callback) => {
                if(value === ''){
                    callback(new Error('价格不能为空'));
                }
                else{
                    callback();
                }
            }
            var validateNum = (rule, value, callback) => {
                if(value === ''){
                    callback(new Error('价格不能为空'));
                }
                else{
                    callback();
                }
            }
            var validateIntro = (rule, value, callback) => {
                if(value === ''){
                    callback(new Error('介绍不能为空'));
                }
                else{
                    callback();
                    this.btnState = false;
                }
            }
            return{
                tabPosition: 'left',
                products: [],
                src: require('../../assets/images/products/ns.jpg'),
                ruleForm: {
                    title: '',
                    price: '',
                    num: '',
                    intro: '', 
                    img: ''
                },
                rules: {
                    title: [
                        { validator: validateTitle, trigger: 'blur' }
                    ],
                    price: [
                        { validator: validatePrice, trigger: 'blur' }
                    ],
                    num: [
                        { validator: validateNum, trigger: 'blur' }
                    ],
                    intro: [
                        { validator: validateIntro, trigger: 'blur' }
                    ]
                },
                btnState: true
            }
        },
        components:{
            NavMenu,
            Footer,
            FixedTools
        },
        mounted(){
            this.getMyProducts();
        },
        methods:{
            getMyProducts(){
                axios.post('http://localhost:3000/api/my')
                .then(res => {
                    this.products = res.data;
                })
            },
            handleExceed(){
                alert('只能上传一张图片！');
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        axios.post('http://localhost:3000/api/upload',{
                            product_title: this.ruleForm.title,
                            product_price: this.ruleForm.price,
                            stock_num: this.ruleForm.num,
                            product_intro: this.ruleForm.intro
                        })
                        .then(res => {
                            if(res.data.code === 1){
                                alert('上架成功！');
                                location.reload();
                            }
                        })
                    }else{
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            changeState(productId){
                axios.post('http://localhost:3000/api/changeState', {
                    product_id: productId
                })
                .then(res => {
                    if(res.data.code === 2){
                        alert('下架成功');
                        location.reload();
                    }
                    else if(res.data.code === 1){
                        alert('上架成功');
                        location.reload();
                    }
                    else{
                        alert('操作失败，请联系客服');
                        location.reload();
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .line, .line2{
        width: 100%;
        height: 1px;
        background: #DFDFDF;
    }
    .line2{
        position: relative;
        top: -60px;
    }
    .el-tabs{
        width: 1200px;
        height: 1000px;
        margin: 20px auto 60px auto;
    }
    #tab-0{
        margin-top: 200px;
    }
    .list{
        ul{
            height: 1000px;
            overflow-y: scroll;
        }
        li{
            background: #f6f6f6;
            padding: 10px;
            margin: 0 0 10px 0;
            position: relative;
            img{
                display: inline-block;
                height: 200px;
            }
            .clearFix{
                width: 80%;
                .fr{
                    width: 65%;
                    position: relative;
                    top: 30px;
                }
            }
            h2{
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin: 10px auto;
                font-size: 28px;
                color: #000000;
            }
            p{
                font-size: 20px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin: 0 auto;
                color: #666666;
            }
            h4{
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin: 10px auto;
                font-size: 28px;
                color: red;
            }
        }
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
    .el-form{
        width: 800px;
        position: relative;
        left: 120px;
    }
</style>

<style lang="scss">
    .el-tabs__active-bar{
        background: #099e80;
    }
    .el-tabs__item.is-active, .el-tabs__item:hover{
        color: #099e80;
    }
    .el-upload-list--picture .el-upload-list__item{
        width: 300px;
    }
    
</style>
