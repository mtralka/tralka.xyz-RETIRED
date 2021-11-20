<script setup>
import { onBeforeUnmount, onMounted, ref } from '@nuxtjs/composition-api'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
let scene,
  camera,
  renderer,
  cube,
  ambientLight,
  light,
  landsat,
  curve,
  t,
  earth,
  mixer

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
  // light = createPointLight()
  // scene.add(light)
  window.addEventListener('resize', onWindowResize, false)
  //   BOX
  // const geometry = new THREE.BoxGeometry()
  // const material = new THREE.MeshPhysicalMaterial({ color: 0x156b6b })
  // material.color.set('purple')
  // cube = new THREE.Mesh(geometry, material)
  // scene.add(cube)

  /*

    v 0.051242 -0.176366 0.982990
    v -0.928230 0.006908 1.066931
    v -0.979472 0.183274 0.083941
    v -1.030713 0.359640 -0.899049
    v -0.051242 0.176366 -0.982990
    v 0.928230 -0.006908 -1.066931
    v 0.979472 -0.183274 -0.083941
    v 1.030713 -0.359640 0.899049


  */
  // const points = [
  //   [0.051242, -0.176366, 0.98299],
  //   [-0.92823, 0.006908, 1.066931],
  //   [-0.979472, 0.183274, 0.083941],
  //   [-1.030713, 0.35964, -0.899049],
  //   [-0.051242, 0.176366, -0.98299],
  //   [0.92823, -0.006908, -1.066931],
  //   [0.979472, -0.183274, -0.083941],
  //   [1.030713, -0.35964, 0.899049],
  // ]

  // CURVE
  curve = new THREE.EllipseCurve(3.4, -2.7, 5.6, 5.7, 0, 2 * Math.PI, false, 0)

  const points = curve.getPoints(50)
  // const geoCurve = new THREE.BufferGeometry().setFromPoints(points)
  // const material = new THREE.LineBasicMaterial({ color: 0xff0000 })
  // const ellipse = new THREE.Line(geoCurve, material)

  // ellipse.position.set(3, -2.7, 0)
  // scene.add(ellipse)
  const loader = new GLTFLoader()
  console.log(curve)
  const landsatModel = await loader.loadAsync('/landsat.glb')
  landsat = setupModel(landsatModel)

  // landsat.position.set(0, 0, 0)
  // landsat.rotation.set(0, 0, 0)
  // landsat.rotation.y = Math.PI / 2
  // landsat.rotation.z = Math.PI / 2
  // landsat.rotation.x = Math.PI / 2
  // landsat.position.set(0.5, -0.5, 1)
  // landsat.rotateX(THREE.Math.degToRad(90))
  landsat.scale.set(0.9, 0.9, 0.9)
  landsat.rotateY(THREE.Math.degToRad(-30))
  landsat.rotateZ(THREE.Math.degToRad(180))

  scene.add(landsat)

  const earthModel = await loader.loadAsync('/earth.glb')
  mixer = new THREE.AnimationMixer(earthModel.scene)
  const animationAction = mixer.clipAction(earthModel.animations[0]).play()
  earth = setupModel(earthModel)
  earth.scale.set(0.12, 0.12, 0.12)
  earth.position.set(3, -2.7, 0)
  scene.add(earth)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
  directionalLight.target = earth
  scene.add(directionalLight)

  const directionalLightLandsat = new THREE.DirectionalLight(0xffffff, 0.3)
  directionalLightLandsat.target = landsat
  scene.add(directionalLightLandsat)

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

// const needResize = () => {
//   const canvas = renderer.domElement
//   const width = canvas.clientWidth
//   const height = canvas.clientHeight
//   const needResize = canvas.width !== width || canvas.height !== height
//   if (needResize) {
//     console.log('NEED RESIZE')
//     renderer.setSize(width, height)
//   }
// }

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

  const pt = curve.getPointAt(t)
  landsat.position.set(pt.x, pt.y, pt.z)
  // cube.rotation.y += 0.002
  // cube.rotation.x += 0.002
  // THREE.Math.degToRad(180)
  // landsat.rotateZ()
  landsat.rotation.z += THREE.Math.degToRad(0.075)
  // landsat.rotation.y += THREE.Math.degToRad(0.00075)
  landsat.rotation.x += THREE.Math.degToRad(0.000075)
  t = t > 1 ? 0 : (t += 0.0002)
  const delta = clock.getDelta()
  mixer.update(delta / 1.2)

  animateThreeJs()
  //   needResize()
}
</script>

<template>
  <div class="scene">
    <div id="three-scene-canvas" ref="canvas" />
  </div>
</template>
