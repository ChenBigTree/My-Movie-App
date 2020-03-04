<template>
  <div id="movie">
    <router-view />
  </div>
</template>

<style lang="less">
body{
  background: #f2f2f2;
}
body,
html,
#movie {
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  font-size: 14px;
  color: #000000;
}

button {
  border: none;
  background: none;
  display: block;
}

ul,
ol {
  list-style: none;
}

p {
  padding: 0;
}

li {
  display: block;
  float: left;
}

h1 {
  font-size: 22px;
}

h2 {
  font-size: 20px;
}

h3 {
  font-size: 18px;
}

h4 {
  font-size: 16px;
}

h5 {
  font-size: 14px;
}

h6 {
  font-size: 12px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
}

.auto-img {
  width: 100%;
  display: block;
}

input {
  border: none;
  outline: none;
  padding: 0;  
  /* 背景图透明 */
  background: transparent;
}

.fr {
  float: right;
}

.fl {
  float: left;
}

.clearfix::after {
  content: "";
  display: block;
  clear: both;
}

textarea,
input {
  border: none;
  outline: none;
  background: no-repeat;
}

.oneTextOverflow {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.towTextOverflow {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

textarea {
  resize: none;
  outline: none;
}
</style>
