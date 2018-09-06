from clipper_admin import ClipperConnection, KubernetesContainerManager, DockerContainerManager

clipper_conn = ClipperConnection(DockerContainerManager())
clipper_conn.stop_all()