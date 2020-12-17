"use strict"

window.addEventListener("load",()=>{
      

    function show_costos(){
        var netas_prima =parseInt(document.getElementById("f1").value); 
        var inv_inicialMP =parseInt(document.getElementById("f6").value); 
        var materia_piDis = netas_prima+inv_inicialMP;
        //
        var inv_finalMP = parseInt(document.getElementById("f8").value);
        var materia_diMP = materia_piDis - inv_finalMP;
        var mano_obraD = parseInt(document.getElementById("f4").value);
        var cargos_ind = parseInt(document.getElementById("f0").value);
        // = Costo Incurrido
        var costo_inc = (materia_diMP+mano_obraD+cargos_ind);
        var inv_inicialPproceso = parseInt(document.getElementById("f2").value);
        var total_proce =  costo_inc + inv_inicialPproceso;
        var inv_finalPproceso = parseInt(document.getElementById("f3").value);
        var costo_Pterminada = total_proce - inv_finalPproceso;
    
        //DIVS
        var div1=document.querySelector("#cost_prod")
        var div2 = document.querySelector("#prod_vend");   
        //DIV 2 : Produccion y de lo vendido
        var inv_inicialPterminada = parseInt(document.getElementById("f9").value);
        var prod_Tdisponible = costo_Pterminada + inv_inicialPterminada;
        var inv_finalPterminada = parseInt(document.getElementById("f7").value);
        var cost_deVend = prod_Tdisponible - inv_finalPterminada;   

        let elementos = new Array (netas_prima,inv_inicialMP,materia_piDis,inv_finalMP,materia_diMP,mano_obraD,cargos_ind,
           costo_inc,inv_finalPproceso,total_proce,inv_finalPproceso,costo_Pterminada );

           
           for (let i in elementos ){

           var li = document.createElement("li");
           li.appendChild(document.createTextNode(elementos[i]));
           document.querySelector('#ul1').appendChild(li);
           document.querySelector('#ul2').appendChild(li);

           }

    div1.style.display="block";
    div2.style.display="block";
        
        console.log(" !!! Exito");
                      
          }
             
          var form = document.addEventListener("submit",show_costos);

          var clean = document.querySelector("#clean");
          clean.addEventListener("click",()=>{
            
            console.log("Algo esta bien")
            
          });
   



});
