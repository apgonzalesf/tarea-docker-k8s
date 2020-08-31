#tarea-docker-k8s#

#docker-compose#
git clone https://github.com/apgonzalesf/tarea-docker-k8s.git
cd tarea-docker-k8s
git checkout tags/docker-compose
docker-compose up -d --build --force-recreate


 
 
#KUBERNETES#
git clone https://github.com/apgonzalesf/tarea-docker-k8s.git 

#Imagenes# , va cambiando la version
cd hero-backend
chmod a+x mvnw
docker build --tag hero-backend:4.0 .
docker tag hero-backend:4.0 apgonzalesf/hero-backend:4.0
docker push apgonzalesf/hero-backend:4.0

cd hero-ui
docker build --tag hero-ui:1.0 .
docker tag hero-backend:1.0 apgonzalesf/hero-ui:1.0
docker push apgonzalesf/hero-ui:1.0

cd kubernetes 
kubectl create secret generic postgres-user-pass --from-literal=username=postgres --from-literal=password=postgres
kubectl create secret generic postgres-db-url --from-literal=url='polling-app-postgres:5432' --from-literal=database=hero

kubectl apply -f postgres-configmap.yaml
kubectl apply -f postgres-deployment.yaml
kubectl apply -f polling-app-server.yaml 
kubectl apply -f polling-app-client.yaml

minikube service polling-app-server --url 
 
kubectl port-forward service/polling-app-server 8080:8080
kubectl port-forward service/polling-app-client 8088:80

#extra# 
kubectl delete --all deployments
kubectl delete --all services
kubectl delete pvc --all 
kubectl delete pv --all
