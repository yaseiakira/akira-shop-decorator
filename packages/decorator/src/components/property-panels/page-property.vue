<template>
  <div class="page-property">
    <div class="switch">
      <el-switch
        v-model="property.isImage"
        active-text="背景图片"
        inactive-text="背景色"
        @change="typeChange">
      </el-switch>
    </div>
    <el-form>
      <el-form-item v-show="!property.isImage">
        <theme-colors-selector @themeChange="onThemeChange"></theme-colors-selector>
      </el-form-item>
      <el-form-item v-show="property.isImage" style="text-align: center;">
        <!--<single-image-uploader :uploadedImage="property.bgImage" :enableBase64="true"-->
                               <!--@uploadSuccess="uploadSuccess"-->
                               <!--@deleteSuccess="deleteSuccess"></single-image-uploader>-->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  // import SingleImageUploader from '../Upload/single-image-uploader';

  export default {
    name: 'page-property',
    // components: { SingleImageUploader },
    data() {
      return {
        property: {
          isImage: false,
          bgColor: '',
          bgColorName: '',
          bgImage: ''
        }
      }
    },
    methods: {
      typeChange() {
        if (!this.property.isImage) {
          this.property.bgImage = '';
          this.property.bgColor = '#f0f0f0';
          this.propertyChange()
        }
      },
      deleteSuccess() {
        this.property.bgImage = '';
        this.propertyChange()
      },
      uploadSuccess(url) {
        this.property.bgImage = url
        this.propertyChange()
      },
      onThemeChange(theme) {
        this.property.bgColor = theme.color
        this.property.bgColorName = theme.name
        this.propertyChange()
      },
      propertyChange() {
        this.$emit('propertyChange', {
          name: 'page-property',
          data: this.property
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .switch {
    text-align: center;
    margin-bottom: 14px;
  }
  .page-property{
    text-align: initial;
  }
</style>
