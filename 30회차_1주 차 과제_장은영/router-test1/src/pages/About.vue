<template>
  <div class="card card-body">
    <h2>About</h2>
    <p>이날치(LeeNalChi)는 판소리와 현대 음악을 결합한 밴드입니다.</p>
    <p>전통과 현대를 잇는 독창적인 음악으로 세계적으로 주목받고 있습니다.</p>
    <p>요청 경로 : {{ $route.path }}</p>
  </div>
</template>

<script>
export default {
  name: "About",
  created() {
    console.log(this.$route);
  }
}
</script>

