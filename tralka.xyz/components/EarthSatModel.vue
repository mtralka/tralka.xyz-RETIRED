<script setup>
import { onBeforeUnmount, onMounted, ref } from '@nuxtjs/composition-api'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
let scene, camera, renderer, ambientLight, combined, t, mixer

const canvas = ref(0)
const clock = new THREE.Clock()

onBeforeUnmount(() => {
  window.removeEventListener('resize', onWindowResize)
})

onMounted(async () => {
  const container = document.querySelector('#three-scene-canvas')
  scene = createScene()
  camera = createCamera()
  renderer = createRenderer()
  ambientLight = createAmbientLight()
  scene.add(ambientLight)
  window.addEventListener('resize', onWindowResize, false)

  const loader = new GLTFLoader()
  const combinedModel = await loader.loadAsync('/globeLandsat7.glb')
  mixer = new THREE.AnimationMixer(combinedModel.scene)

  combinedModel.animations.forEach((clip) => {
    mixer.clipAction(clip).play()
  })

  combined = setupModel(combinedModel)
  combined.scale.set(0.12, 0.12, 0.12)
  combined.position.set(3, -2.7, 0)
  combined.rotateY(THREE.Math.degToRad(-40))
  scene.add(combined)
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
  directionalLight.target = combined
  scene.add(directionalLight)

  container.append(renderer.domElement)
  renderer.render(scene, camera)
  t = 0
  animateThreeJs()
  animate()
})

const setupModel = (data) => {
  return data.scene
}

const createScene = () => {
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x000000)
  return scene
}

const createCamera = () => {
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.set(0, 0, 10)
  return camera
}

const createRenderer = () => {
  const renderer = new THREE.WebGLRenderer({ alpha: true })
  const clientHeight = window.innerHeight
  const clientWidth = window.innerWidth
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

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

  renderer.setSize(window.innerWidth, window.innerHeight)
}

const animateThreeJs = () => {
  renderer.render(scene, camera)
  renderer.shadowMap.needsUpdate = true
}

const animate = () => {
  requestAnimationFrame(animate)

  t = t > 1 ? 0 : (t += 0.0002)
  const delta = clock.getDelta()
  mixer.update(delta / 3)
  combined.children[2].children[0].rotateX(0.005)
  animateThreeJs()
}
</script>

<template>
  <div class="scene">
    <div id="three-scene-canvas" ref="canvas" />
  </div>
</template>
