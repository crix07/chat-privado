var socket =  io.connect('http://192.168.0.13:3000', {'forceNew':true})

socket.on('messages', (data)=>{
  console.log(data);
  render(data)
})

function render(data){
  var html = data.map((message, index)=>{
    return (`
      <div class="message">
        <strong>${message.nickname}</strong> Dice:
        <p>${message.text}</p>
      </div>
    `)
  }).join(' ')

  var msgs = document.getElementById('messages')

  msgs.innerHTML = html
  msgs.scrollTop = msgs.scrollHeight
}


function addMessage(e){
  var payload = {
    nickname: document.getElementById('nickname').value,
    text: document.getElementById('text').value
  };

  document.getElementById('nickname').style.display = 'none';
  socket.emit('add-message', payload);
  text: document.getElementById('text').value = ''
  return false;
}
