 <template>
  <div class="home">
    <p>Vue2</p>
    <p>移动端专用脚手架</p>
    <div class="sign">Sign：THyo</div>
  </div>
</template>

<script>
export default {};
</script>


<style lang="less" scoped>
.home {
  height: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  color: #4abf8a;
  .sign {
    position: absolute;
    right: 50px;
    bottom: 30px;
    color: cornflowerblue;
    font-size: 18px;
  }
}
</style>