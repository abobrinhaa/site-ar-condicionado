export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmailmessage', 'template_qadh5ds', e.target, 'A3XA7os2qyIu8muCJ')
            .then((result) => {
                console.log(result.text);
                alert("Mensagem enviada com sucesso! 👍");
            }, (error) => {
                console.log(error.text);
                alert(error.message);
            });
        e.target.reset();
    }
}

<div class="container">
<h2>Contato</h2>
<form onSubmit="sendEmail(event)">
    <div class="row pt-5 mx-auto">
        <div class="col-lg-8 col-sm-12 form-group mx-auto">
            <label>Nome</label>
            <input type="text" autoFocus class="form-control" required placeholder="Nome" name="name"/>
        </div>
        <div class="col-lg-8 col-sm-12 form-group pt-1 mx-auto">
            <label>Email</label>
            <input type="email" class="form-control" required placeholder="Seu email" name="email"/>
        </div>
        <div class="col-lg-8 col-sm-12 form-group pt-1 mx-auto">
            <label>Mensagem</label>
            <textarea class="form-control" cols="30" rows="8" required placeholder="Sua mensagem" name="message"></textarea>
        </div>
        <input type="submit" class="btn btn-info" value="Enviar mensagem"></input>
    </div>
</form>
</div>


document.addEventListener('DOMContentLoaded', function() {
    const formHTML = `
      <form id="contatoForm">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required><br><br>
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br><br>
        
        <label for="mensagem">Mensagem:</label><br>
        <textarea id="mensagem" name="mensagem" required></textarea><br><br>
        
        <button type="submit">Enviar</button>
      </form>
    `;
    
    const container = document.getElementById('formContainer');
    if (container) {
      container.innerHTML = formHTML;
  
      // Garantir que o formulário seja visível
      container.style.display = 'block';
      container.style.margin = '20px auto';
    }
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    alert("JavaScript carregado e funcionando!");
  });
  