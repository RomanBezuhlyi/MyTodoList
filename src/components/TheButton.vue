<template>
  <button class="button" :type="type"><slot></slot></button>
</template>

<script>
export default {
  name: "TheButton",
  props: {
    type: String,
  },
};
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 220px;
  height: 44px;

  font-family: "Montserrat Medium";
  font-size: 18px;
  line-height: 21px;

  background: #ff662d;
  border: 2px solid #ff662d;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: #ff662d;
    background-color: #ffffff;
  }
}
</style>
