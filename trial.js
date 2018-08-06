class Node {
  constructor(data){
    this.elementvalue=data;
    this.next=null;
  }
}

class linkedlist {
   constructor(){
  this.head=null;
  this.size=0;
}

//adding an element at the end of the linkedlist

add(data) {
  var nodetobeinserted= new Node(data);
  if(this.head==null){
    this.head= nodetobeinserted;
  }
  else{
     var utilitynode=this.head;
     for(var m=0;m<this.size;m++){
                 utilitynode=utilitynode.next;
     }
     utilitynode.next= nodetobeinserted;
  }
     this.size++;
     return nodetobeinserted.elementvalue;
}


// removing an element from the linked list from a desired index.

removefrom(index) {
  var currentnode,previousnode,i;
   currentnode= this.head;
   if(index==0){
     this.head= currentnode.next;
   }
   else{
        for(i=0;i<index;i++){
        previousnode=currentnode;
        currentnode=currentnode.next;
        }
        previousnode.next= currentnode.next;
        this.size--;
    }
        return currentnode.elementvalue;
}
}
