var stl_viewer=new StlViewer
    (
        document.getElementById("stl_cont"),
            {
                models:
                    [
                        {filename:"PrinterFullAssembly.STL"}
                    ]
                    
                }
                
        );

let HotEnd = document.querySelector('.HotEnd');
HotEnd.addEventListener('click',function(){
    setCAD("FinalHotEndAssembly.STL",stl_viewer)
    });

let FullAssembly = document.querySelector('.FullAssembly');
FullAssembly.addEventListener('click',function(){
    setCAD("PrinterFullAssembly.STL",stl_viewer)
    });
let XAxis = document.querySelector('.X-Axis');
XAxis.addEventListener('click',function(){
    setCAD("X-Axis.STL",stl_viewer)
    });
let YAxis = document.querySelector('.Y-Axis');
YAxis.addEventListener('click',function(){
    setCAD("Y-Axis.STL",stl_viewer)
    });

let ZAxis = document.querySelector('.Z-Axis');
ZAxis.addEventListener('click',function(){
    setCAD("Z-Axis.STL",stl_viewer)
    });

let PrintHead = document.querySelector('.PrintHead');
PrintHead.addEventListener('click',function(){
    setCAD("PrintHead.STL",stl_viewer)
    });

function setCAD(ii,stl_viewer){
    stl_viewer.clean();
    stl_viewer.add_models({filename:ii});


}