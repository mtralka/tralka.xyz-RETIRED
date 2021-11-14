<!-- <script setup>
import { onMounted, ref } from '@nuxtjs/composition-api'
import * as THREE from 'three'

const canvas = ref(0)

onMounted(() => {
  console.log(canvas)
  //   const sceneCanvas = document.getElementById('three-scene-canvas')
  const sceneCanvas = canvas
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    75,
    sceneCanvas.clientWidth / sceneCanvas.clientHeight
    // sceneCanvas.getBoundingClientRect().width /
    //   sceneCanvas.getBoundingClientRect().height,
    0.1,
    1000
  )
  camera.position.set(15, 5, 15)

  renderer = new THREE.WebGLRenderer({
    antialias: true,
    powerPreference: 'high-performance',
  })

  renderer.outputEncoding = THREE.sRGBEncoding

  controls = new OrbitControls(camera, renderer.domElement)

  controls.addEventListener('change', animateThreeJs)
  renderer.setSize(sceneCanvas.offsetWidth, sceneCanvas.offsetHeight)

  renderer.setClearColor('#fffff')
  renderer.shadowMap.enabled = true

  renderer.shadowMap.type = THREE.PCFSoftShadowMap

  renderer.shadowMapSoft = true

  renderer.shadowMap.autoUpdate = false

  renderer.shadowMap.needsUpdate = true

  sceneCanvas.append(renderer.domElement)
  const ambientLight = new THREE.AmbientLight(0xdaccff, 0.5)

  scene.add(ambientLight)
  const light = new THREE.PointLight(0xfc831d, 1, 100)
  light.position.set(15, 10, 15)
  light.castShadow = true
  light.shadow.radius = 1
  light.shadow.mapSize.width = 2048
  light.shadow.mapSize.height = 2048

  scene.add(light)

  const Bgeometry = new THREE.BoxGeometry()
  const Bmaterial = new THREE.MeshPhysicalMaterial({ color: 0x00ff00 })
  const cube = new THREE.Mesh(Bgeometry, Bmaterial)
  scene.add(cube)
})

const setupThree = () => {}
</script>

<template>
  <client-only>
    <div class="w-screen h-screen scene">
      <div id="three-scene-canvas" ref="canvas"></div>
    </div>
  </client-only>
</template> -->
