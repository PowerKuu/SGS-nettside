import * as THREE from "three"
import * as CANNON from "cannon-es"

//import CannonDebugger from "cannon-es-debugger"
//import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

interface Cube {
    mesh: THREE.Mesh,
    body: CANNON.Body
}

const cubes:Cube[] = []

let camera:THREE.PerspectiveCamera
let scene:THREE.Scene
let renderer:THREE.WebGLRenderer

let physicsWorld:CANNON.World
//let cannonDebugger:{update: () => void}
let groundBody:CANNON.Body

let currentWidth:number = 1
let currentHeight:number = 1

//let controls:OrbitControls

function syncBodyMesh(body:CANNON.Body, mesh:THREE.Mesh) {
    const bodyPosition = body.position
    const bodyRotation = body.quaternion

    mesh.position.copy(
        new THREE.Vector3(
            bodyPosition.x,
            bodyPosition.y,
            bodyPosition.z
        )
    )

    mesh.quaternion.copy(
        new THREE.Quaternion(
            bodyRotation.x,
            bodyRotation.y,
            bodyRotation.z,
            bodyRotation.w
        )
    )
}

function createCube(position:CANNON.Vec3, radius:number, mass = 5){
    const cubeBody = new CANNON.Body({
        mass,
        shape: new CANNON.Box(new CANNON.Vec3(radius,radius,radius))
    })
    cubeBody.position.set(position.x, position.y, position.z)

    physicsWorld.addBody(cubeBody)

    const geometry = new THREE.BoxGeometry(radius*2, radius*2, radius*2)
    const material = new THREE.MeshLambertMaterial({
        color: "#1066FF"
    })
    const mesh = new THREE.Mesh(geometry, material)


    syncBodyMesh(cubeBody, mesh)
    scene.add(mesh)

    cubes.push({
        mesh: mesh,
        body: cubeBody
    })
}

function initThree(cssClass:string) {
    camera = new THREE.PerspectiveCamera(50, currentWidth / currentHeight, 5, 2000)

    scene = new THREE.Scene()
    scene.background = null

    const ambientLight = new THREE.AmbientLight( 0xaaaaaa )
    const spotLight = new THREE.SpotLight(0xffffff, 0.8)
    
    spotLight.position.set(1, 25, 10)

    scene.add(ambientLight)
    scene.add(spotLight)

    renderer = new THREE.WebGLRenderer({ 
        alpha: true,
        antialias: true,
        
    })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(0, 0)


    //controls = new OrbitControls(camera, renderer.domElement)
    camera.position.set(-(window.innerWidth / 280), 8, 25)
    window.addEventListener("resize", () => {
        camera.position.set(-(window.innerWidth / 280), 8, 25)
    })
    camera.rotation.set(0,0,0)
    //controls.update()
    

    renderer.domElement.classList.add(cssClass)


    return renderer.domElement
}

function initCannon() {
    physicsWorld = new CANNON.World({
        gravity: new CANNON.Vec3(0, -7, 0)
    })

    groundBody = new CANNON.Body({
        type: CANNON.Body.STATIC,
        shape: new CANNON.Plane()
    })

    //cannonDebugger = CannonDebugger(scene, physicsWorld, {
    //})

    groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0)

    physicsWorld.addBody(groundBody)  
}
function numberBetween(min:number, max:number) {
   const random = Math.random() * (max - min) + min

   return random
}

export function setSize(width:number, height:number) {
    currentWidth = width
    currentHeight = height

    renderer.setSize(currentWidth, currentHeight)
    camera.aspect = currentWidth / currentHeight
    camera.updateProjectionMatrix()
}

export default function Simulation({cssClass}:{cssClass:string}) {
    if (renderer) {return renderer.domElement}
    initThree(cssClass)
    initCannon()

    const animate = () => {
        //cannonDebugger.update()
        renderer.render(scene, camera)
        physicsWorld.fixedStep()
        window.requestAnimationFrame(animate)

        for (var cube of cubes) {
            syncBodyMesh(cube.body, cube.mesh)
        }
    }

    animate()

    const randomCube = () => {
        const position = new CANNON.Vec3(numberBetween(-0.1, 0.1), 30, 0)
        const radius = numberBetween(1, 1)
        createCube(position, radius, 5)
    }

    createCube(new CANNON.Vec3(0, 1, 0), 1, 2)
    randomCube()

    var index = 0

    const interval = setInterval(() => {
        if (index == 10) {
            clearInterval(interval)
            return
        }
        index++
        randomCube()
    }, 5000)

    return (renderer as THREE.Renderer).domElement
}
