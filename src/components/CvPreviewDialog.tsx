
import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Download, Eye } from 'lucide-react';

interface CvPreviewDialogProps {
  imageUrl: string;
  filename: string;
}

const CvPreviewDialog = ({ imageUrl, filename }: CvPreviewDialogProps) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="flex items-center cursor-pointer">
          View CV <Eye className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Sashant Shrestha CV</DialogTitle>
          <DialogDescription>
            Preview of CV - click Download to save a copy
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 overflow-auto max-h-[70vh]">
          <img 
            src={imageUrl} 
            alt="CV Preview" 
            className="w-full h-auto rounded-md"
          />
        </div>
        <div className="mt-4 flex justify-end">
          <Button onClick={handleDownload}>
            Download CV <Download className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CvPreviewDialog;
