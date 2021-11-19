<script setup>
import { onMounted, ref } from '@nuxtjs/composition-api'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
let scene, camera, renderer, cube, ambientLight, light, landsat

const canvas = ref(0)

onMounted(async () => {
  const container = document.querySelector('#three-scene-canvas')
  scene = createScene()
  camera = createCamera()
  renderer = createRenderer()
  ambientLight = createAmbientLight()
  scene.add(ambientLight)
  light = createPointLight()
  scene.add(light)

  //   BOX
  // const geometry = new THREE.BoxGeometry()
  // const material = new THREE.MeshPhysicalMaterial({ color: 0x156b6b })
  // material.color.set('purple')
  // cube = new THREE.Mesh(geometry, material)
  // scene.add(cube)

  const loader = new GLTFLoader()

  const landsatModel = await loader.loadAsync('/landsat.glb')
  console.log(landsatModel)
  landsat = setupModel(landsatModel)

  // landsat.position.set(0, 0, 0)
  // landsat.rotation.set(0, 0, 0)
  // landsat.rotation.y = Math.PI / 2
  // landsat.rotation.z = Math.PI / 2
  // landsat.rotation.x = Math.PI / 2
  landsat.position.set(0.5, -0.5, 1)
  landsat.rotateZ(THREE.Math.degToRad(90))
  landsat.rotateY(THREE.Math.degToRad(180))
  landsat.rotateZ(THREE.Math.degToRad(-20))

  scene.add(landsat)

  container.append(renderer.domElement)
  renderer.render(scene, camera)

  animateThreeJs()
  animate()
})

const loadModel = async (path) => {
  const model = await loader.loadAsync(path)
}

const setupModel = (data) => {
  return data.scene
}

const createScene = () => {
  const scene = new THREE.Scene()
  //   scene.background = null
  return scene
}

const createCamera = () => {
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.set(0, 0, 3)
  return camera
}

const createRenderer = () => {
  const renderer = new THREE.WebGLRenderer({ alpha: true })
  //   const clientHeight = window.innerHeight * 0.6
  //   const clientWidth = window.innerWidth * 0.6
  const clientHeight = 800
  const clientWidth = 800
  //   renderer.setClearColor(0xffffff, 0)
  console.log(clientHeight)
  renderer.setSize(clientWidth, clientHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.outputEncoding = THREE.sRGBEncoding
  return renderer
}

const createAmbientLight = () => {
  const ambientLight = new THREE.AmbientLight(0xdaccff, 0.5)
  return ambientLight
}

const createPointLight = () => {
  const light = new THREE.PointLight(0xfc831d, 1, 100)
  light.position.set(15, 10, 15)
  light.castShadow = true
  light.shadow.radius = 1
  light.shadow.mapSize.width = 2048
  light.shadow.mapSize.height = 2048
  return light
}

const needResize = (renderer) => {
  const canvas = renderer.domElement
  const width = canvas.clientWidth
  const height = canvas.clientHeight
  const needResize = canvas.width !== width || canvas.height !== clientHeight
  if (needResize) {
    console.log('NEED RESIZE')
  }
  console.log({ needResize })
}

const animateThreeJs = () => {
  renderer.render(scene, camera)
  renderer.shadowMap.needsUpdate = true
}

const animate = () => {
  requestAnimationFrame(animate)
  // cube.rotation.y += 0.002
  // cube.rotation.x += 0.002
  landsat.rotation.y += 0.002

  animateThreeJs()
  //   needResize()
}
</script>

<template>
  <div class="scene">
    <div id="three-scene-canvas" ref="canvas" />
  </div>
</template>
