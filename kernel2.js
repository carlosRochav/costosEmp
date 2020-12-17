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
        var div = document.querySelectorAll(".div");
        
        console.log(" !!! Exito");
            var p1= document.createElement("p");
            var p2= document.createElement("p");
            var p3= document.createElement("p");
            var p4= document.createElement("p");
            var p5= document.createElement("p");
            var p6= document.createElement("p");
            var p7= document.createElement("p");
            var p8= document.createElement("p");
            var p9= document.createElement("p");
            var p10= document.createElement("p");
            var p11= document.createElement("p");
            var p12= document.createElement("p");
            var p13= document.createElement("p");
            var p14= document.createElement("p");
            var p15= document.createElement("p");
            var p16= document.createElement("p");
           
            var inv_inicialPterminada = parseInt(document.getElementById("f9").value);
            var prod_Tdisponible = costo_Pterminada + inv_inicialPterminada;
            var inv_finalPterminada = parseInt(document.getElementById("f7").value);
            var cost_deVend = prod_Tdisponible - inv_finalPterminada;
            //
            p1.append(`Inventario Inicial de material prima ${inv_inicialMP}`);
            p2.append(` Compras netas de materia prima ${netas_prima}`);
            p3.append(`Materia Prima Disponible : ${materia_piDis}`);
            p4.append(`Inventario Final de materia prima : ${inv_finalMP }`);
            p5.append(` Materia Prima directa/consumida : ${materia_diMP}`);
            p6.append(` Mano de obra directa : ${mano_obraD}`);
            p7.append(` Cargos Indirectos : ${cargos_ind}`);
            p8.append(` Costo Incurrido : ${costo_inc}`);
            p9.append(` Inventario inicial de produccion en proceso : ${inv_inicialPproceso}`);
            p10.append(` Total Procesado : ${total_proce}`);
            p11.append(` Inventario final de produccion en proceso : ${inv_finalPproceso}`);
            p12.append(`Costo de la produccion terminada ${costo_Pterminada} `);
            //DIV II
              p13.append(`Inventario inicial de produccion terminada : ${inv_inicialPterminada}`);
              p14.append(`Produccion terminada disponible : ${prod_Tdisponible}`);
              p15.append(`Inventario final de produccion terminada : ${inv_finalPterminada}`);
              p16.append(`Costo (de produccion) de lo vendido  : ${cost_deVend}`);
           
            

            //DIV 1 : Produccion
            div.append(p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12);       
    }

    var form = document.addEventListener("submit",show_costos);


});
