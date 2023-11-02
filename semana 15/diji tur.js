function info(){
    let num=1;
    let res=true;
    while(num<99 && res==true){
        nomuser=prompt("ingreses no,bre de usuario");
        if (nomuser!=null){
            var n=num.toString().padStart(2,'0');
            var letra="f";
            var letra=letra.concat(n);
            res=confirm("estimado usuario"+""+""+nomuser+"\n"+"su turno es..."+letra);
            num++;
            }else{
                alert("error en el turno...");
                break;
            }
        }
    }
    //pago
    function pago(){
        let num=1;
        let res=true;
        while(num<99 && res==true){
            nomuser=prompt("ingreses no,bre de usuario");
            if (nomuser!=null){
                var n=num.toString().padStart(2,'0');
                var letra="p";
                var letra=letra.concat(n);
                res=confirm("estimado usuario"+""+""+nomuser+"\n"+"su turno es..."+letra);
                num++;
                }else{
                    alert("error en el turno...");
                    break;
                }
            }
        }
        //matricula
        function matri(){
            let num=1;
            let res=true;
            while(num<99 && res==true){
                nomuser=prompt("ingreses no,bre de usuario");
                if (nomuser!=null){
                    var n=num.toString().padStart(2,'0');
                    var letra="m";
                    var letra=letra.concat(n);
                    res=confirm("estimado usuario"+""+""+nomuser+"\n"+"su turno es..."+letra);
                    num++;
                    }else{
                        alert("error en el turno...");
                        break;
                    }
                }
            }
            function pqr(){
                let num=1;
                let res=true;
                while(num<99 && res==true){
                    nomuser=prompt("ingreses no,bre de usuario");
                    if (nomuser!=null){
                        var n=num.toString().padStart(2,'0');
                        var letra="q";
                        var letra=letra.concat(n);
                        res=confirm("estimado usuario"+""+""+nomuser+"\n"+"su turno es..."+letra);
                        num++;
                        }else{
                            alert("error en el turno...");
                            break;
                        }
                    }
                }
