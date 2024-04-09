class Node{
    constructor(elem){
        this.element = elem;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.firstNode = null;
        this.lastNode = null;
        this.length = 0;
    }


    // ใส่ข้อมูลต่อไปเรื่อยๆ
    push(value){
        const newNode = new Node(value);
        if (this.firstNode == null){
            this.firstNode = newNode;
            this.lastNode = newNode;
        }
        else{
            this.lastNode.next = newNode;
            this.lastNode = newNode;
        }
        this.length++;
        return this;
    }
    
    // ใส่ข้อมูลข้างหน้า
    unshift(value){
        const newNode = new Node(value);
        if(this.firstNode == null){
            this.firstNode = newNode;
            this.lastNode = newNode;
        }
        else{
            newNode.next = this.firstNode;
            this.firstNode = newNode;
        }
        this.length++;
        return this;
    }

    // ดึงข้อมูลตัวแรกมาแสดง
    get(index){
        if(index < 0 || index >= this.length){
            return undefined
        }

        let currentNode = this.firstNode;
        for(let i = 0; i < index;i++){
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    // แทรกข้อมูลไปตำแหน่งที่เลือก
    insert(index,value){
        if(index < 0 || index > this.length){
            return false;
        }
        if(index === 0){
            return this.unshift(value);
        }
        if(index === this.length){
            return this.unshift(value);
        }
        const newNode = new Node(value);
        let beforeNode = this.get(index-1);
        newNode.next = beforeNode.next;
        beforeNode.next = newNode;
        this.length++;
        return this;
    }

    // ลบข้อมูลตัวท้าย
    pop(){
        if(this.length === 0){
            return undefined;
        }
        let currentNode = this.firstNode;
        let beforeNode = this.firstNode;
        while(currentNode.next != null){
            beforeNode = currentNode;
            currentNode = currentNode.next;
        }
        this.lastNode = beforeNode;
        this.lastNode.next = null;
        this.length--;
        if(this.length === 0){
            this.firstNode = null;
            this.lastNode = null;
        }
        return currentNode;
    }

    // ลบข้อมูลตัวแรก
    shift(){
        if(this.length == 0){
            return undefined;
        }
        let currentNode = this.firstNode;
        this.firstNode = this.firstNode.next;
        currentNode.next = null;
        this.length--;
        if(this.length == 0){
            this.lastNode = null;
        }
        return currentNode;
    }

    // ลบข้อมูลที่เลือก
    remove(index){
        if( index < 0 || index >= this.length){
            return undefined
        }
        if(index === 0){
            return this.shift();
        }
        if(index === this.length-1){
            return this.pop();
        }
        let currentNode = this.get(index);
        let beforeNode = this.get(index-1);
        beforeNode.next = currentNode.next;
        currentNode = null;
        this.length--;
        return currentNode;
    }

    // แทนที่ข้อมูล
    set(index,value){
        let temp = this.get(index);
        if(temp != undefined){
            temp.element = value;
            return true;
        }
        return false;
    }

    // ลบข้อมูลทั้งหมด
    Reset() {
        this.firstNode = null;
        this.lastNode = null;
        this.length = 0;
    }
}

// --- main
let D = document.getElementById("data");
let P = document.getElementById("Pos");
let R = document.getElementById("result");
let St = document.getElementById("showget");

let Mylist = new LinkedList();
console.log(Mylist)


function display(){
    R.innerHTML = "";
    for(let i = 0 ; i < Mylist.length ; i++){
        let data = Mylist.get(i);
        R.innerHTML = R.innerHTML + data.element + " ";
    }
}

function PushData(){
    Mylist.push(D.value)
    display()
}


function UnshifeData(){
    Mylist.unshift(D.value)
    display();
}

// index คือ ตำแหน่งที่ Input 
function GetData(){
    let index = parseInt(P.value);
    let getData = Mylist.get(index);
    St.innerHTML = getData.element;
}

function InsertData(){
    index = parseInt(P.value)
    Mylist.insert(index , D.value)
    display()
}

function PopData(){
    Mylist.pop();
    display();
}

function ShiftData(){
    Mylist.shift();
    display() 
}

function RemoveData(){
    let index = parseInt(P.value)
    Mylist.remove(index)
    display()
}

function SetData(){
    let index = parseInt(P.value)
    Mylist.set(index , D.value)
    display()
}

function Reset(){
    D.value = ""
    R.innerHTML = ""
    P.value = ""
    St.innerHTML = ""
    Mylist.Reset()
    console.log(Mylist)
}