<script setup>
import { onBeforeUnmount, onMounted, ref } from '@nuxtjs/composition-api'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
let scene, camera, renderer, cube, ambientLight, light, curve, t, cloud

const canvas = ref(0)
const clock = new THREE.Clock()

onBeforeUnmount(() => {
  window.removeEventListener('resize', onWindowResize)
})

onMounted(async () => {
  const container = document.querySelector('#three-scene-canvas-cloud')
  scene = createScene()
  camera = createCamera()
  renderer = createRenderer()
  ambientLight = createAmbientLight()
  scene.add(ambientLight)
  light = createPointLight()
  scene.add(light)
  window.addEventListener('resize', onWindowResize, false)
  //   BOX
  // const geometry = new THREE.BoxGeometry()
  // const material = new THREE.MeshPhysicalMaterial({ color: 0x156b6b })
  // material.color.set('purple')
  // cube = new THREE.Mesh(geometry, material)
  // scene.add(cube)
  const loader = new GLTFLoader()

  const cloudModel = await loader.loadAsync('/cloud.glb')
  cloud = setupModel(cloudModel)

  cloud.position.set(-1, 4, -1)
  cloud.scale.set(0.2, 0.2, 0.2)

  scene.add(cloud)

  container.append(renderer.domElement)
  renderer.render(scene, camera)
  t = 0
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
  scene.background = new THREE.Color(0x73d1ff)
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
  // const clientHeight = 800
  // const clientWidth = 800
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
  // needResize()
  // curve.getPointAt(pathTime % 1)

  // const pt = curve.getPointAt(t)
  // landsat.position.set(pt.x, pt.y, pt.z)
  // cube.rotation.y += 0.002
  // cube.rotation.x += 0.002
  // THREE.Math.degToRad(180)
  // landsat.rotateZ()
  // landsat.rotation.z += THREE.Math.degToRad(0.075)
  // landsat.rotation.y += THREE.Math.degToRad(0.00075)
  // landsat.rotation.x += THREE.Math.degToRad(0.000075)
  t = t > 1 ? 0 : (t += 0.0002)
  // const delta = clock.getDelta()
  // mixer.update(delta / 1.2)

  animateThreeJs()
  //   needResize()
}
</script>

<template>
  <div class="scene">
    <div id="three-scene-canvas-cloud" ref="canvas" />
  </div>
</template>
