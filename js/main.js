var camera;
var scene;
var renderer;
var mesh;

init();
animate();

function init() {

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000);

    var light = new THREE.DirectionalLight( 0xffffff );
    light.position.set( 0, 1, 1 ).normalize();
    scene.add(light);

    var geometry = new THREE.BoxGeometry( 0.25, 0.25, 0.25 );

    var material = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('img/texture-atlas.bmp') } );

    var one = [new THREE.Vector2(0, .666), new THREE.Vector2(.5, .666), new THREE.Vector2(.5, 1), new THREE.Vector2(0, 1)];
    var two = [new THREE.Vector2(.5, .666), new THREE.Vector2(1, .666), new THREE.Vector2(1, 1), new THREE.Vector2(.5, 1)];
    var three = [new THREE.Vector2(0, .333), new THREE.Vector2(.5, .333), new THREE.Vector2(.5, .666), new THREE.Vector2(0, .666)];
    var four = [new THREE.Vector2(.5, .333), new THREE.Vector2(1, .333), new THREE.Vector2(1, .666), new THREE.Vector2(.5, .666)];
    var five = [new THREE.Vector2(0, 0), new THREE.Vector2(.5, 0), new THREE.Vector2(.5, .333), new THREE.Vector2(0, .333)];
    var six = [new THREE.Vector2(.5, 0), new THREE.Vector2(1, 0), new THREE.Vector2(1, .333), new THREE.Vector2(.5, .333)];
  
    geometry.faceVertexUvs[0] = [];

        geometry.faceVertexUvs[0][0] = [ one[0], one[1], one[3] ];
        geometry.faceVertexUvs[0][1] = [ one[1], one[2], one[3] ];
          
        geometry.faceVertexUvs[0][2] = [ two[0], two[1], two[3] ];
        geometry.faceVertexUvs[0][3] = [ two[1], two[2], two[3] ];
          
        geometry.faceVertexUvs[0][4] = [ three[0], three[1], three[3] ];
        geometry.faceVertexUvs[0][5] = [ three[1], three[2], three[3] ];
          
        geometry.faceVertexUvs[0][6] = [ four[0], four[1], four[3] ];
        geometry.faceVertexUvs[0][7] = [ four[1], four[2], four[3] ];
          
        geometry.faceVertexUvs[0][8] = [ five[0], five[1], five[3] ];
        geometry.faceVertexUvs[0][9] = [ five[1], five[2], five[3] ];
          
        geometry.faceVertexUvs[0][10] = [ six[0], six[1], six[3] ];
        geometry.faceVertexUvs[0][11] = [ six[1], six[2], six[3] ];

  
    mesh = new THREE.Mesh(geometry,  material);
    mesh.position.z = -2;
    scene.add( mesh );
     
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    window.addEventListener( 'resize', onWindowResize, false );
        
    render();
}

function animate() {
    mesh.rotation.x += .03;
    mesh.rotation.y += .03;
  
    render();
    requestAnimationFrame( animate );
}

function render() {
    renderer.render( scene, camera );
}


function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
    render();
}
