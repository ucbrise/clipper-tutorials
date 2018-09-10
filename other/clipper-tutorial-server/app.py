from flask import Flask, request, render_template
import redis

app = Flask(__name__)
r = redis.Redis()

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/assign_vm", methods=["POST"])
def user_email():
    email = request.form["email"]
    vm_addr = r.get(email)
    if vm_addr != None:
        vm_addr = vm_addr.decode()
    else:
        vm_addr = r.blpop("provisioned_vms")[1].decode()
        r.set(email, vm_addr)
    return render_template("vm.html", vm=vm_addr)

if __name__ == '__main__':
    app.run(debug=True)