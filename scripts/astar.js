let astar = (s) =>{
    let curr;
    start = grid[s];
    oset = [start]; 
    cset = [];
    while (oset.length > 0){  
        if (curr == end){
            break; 
        }
        let lowest = oset[0]; 
        // priority queue 
        for (ele of oset){
            if (oset.includes(ele)){
                lowest = ele; 
            }
            else if (ele.f == lowest.f && ele.h < lowest.h){
                lowest = ele; 
            }
            else if (ele.f == lowest.f && ele.h == lowest.h && ele.g < lowest.g){
                lowest = i;
            }
        }
        curr = lowest;

        oset = remove(oset, curr);
        cset.push(curr); 

        // checking the neightbors of current
        nebs = curr.neighbors; 
        for (neb of nebs){
            if (oset.includes(neb) && !isWall(curr, neb)){
                // not the first time seeing neb
                tempG = curr.g++; 
                if (tempG < neb.g){
                    neb.g = tempG; 
                    neb.f = neb.g + neb.h; 
                    neb.prev = curr;
                }
            }
            else if (!cset.includes(neb) && !isWall(curr, neb)){
                // first time seeing neb
                neb.g = curr.g++;
                oset.push(neb);
                neb.getH();
                neb.f = neb.g + neb.h; 
                neb.prev = curr;
            }
        }
        fill(255)
    }
    let p = end; 
    for (let i = 0 ; i < grid.length; i++)
    {grid[i].show();}
    
    let lines = document.getElementById("line");
    lineColor = lines.value;
    let c = 0; 
    while (true){
        if (p == start){
            strokeWeight(0); 
            fill(0,255,0);
            circle(start.x+(w/2), start.y+(w/2), w/2)
            fill(255,0,0)
            circle(end.x+(w/2), end.y+(w/2), w/2)
            return c
        }
        stroke(lineColor);
        strokeWeight(1)
        line(p.x-(w/2)+w , p.y-(w/2)+w, p.prev.x-(w/2)+w, p.prev.y-(w/2)+w)
        p = p.prev
        c++; 
    }
}

let remove = (arr, ele) =>{
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == ele){
            arr.splice(i,1);
            return arr;
        }
    }
}