from moviepy.editor import VideoFileClip
from PIL import ImageFilter 

def compress_video(input_path, output_path, bitrate='500k'):
    video_clip = VideoFileClip(input_path)
    compressed_clip = video_clip.resize(width=480)  # Adjust the width as needed
    compressed_clip.write_videofile(output_path, bitrate=bitrate)
    video_clip.close()

# Replace 'input_video.mp4' and 'output_compressed.mp4' with your file names
input_video_path = 'videos\Elemental dungeons.mp4'
output_compressed_path = 'videos\Elemental_dungeons_small.mp4'

compress_video(input_video_path, output_compressed_path)
