# tarea-docker-k8s

DOCKERT CONTAINERS
git clone https://github.com/apgonzalesf/tarea-docker-k8s.git
cd tarea-docker-k8s
docker-compose up -d --build --force-recreate


http://70.37.78.9:4200/


KUBERNETES
cd tarea-docker-k8s
cd hero-backend
chmod a+x mvnw

docker build --tag hero-backend:1.0 .
docker tag hero-backend:1.0 apgonzalesf/hero-backend:1.0
docker push apgonzalesf/hero-backend:1.0

cd tarea-docker-k8s
cd hero-ui
docker build --tag hero-ui:1.0 .
docker tag hero-backend:1.0 apgonzalesf/hero-ui:1.0
docker push apgonzalesf/hero-ui:1.0


cd kubernetes
 
kubectl create secret generic postgres-user-pass --from-literal=username=postgres --from-literal=password=postgres   
kubectl create secret generic postgres-db-url --from-literal=url='localhost:5432' --from-literal=database=hero

kubectl apply -f postgres-configmap.yaml
kubectl apply -f postgres-deployment.yaml
kubectl apply -f polling-app-server.yaml

minikube service polling-app-server --url
curl http://172.17.0.3:31059


kubectl apply -f polling-app-client.yaml


http://70.37.78.9:4200/