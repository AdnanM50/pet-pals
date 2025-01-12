'use client'

import { useState, useRef, DragEvent } from 'react'
import { ImageIcon, X } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface FileWithPreview extends File {
  preview: string
}

interface ImageUploadProps {
  onChange: (value: string) => void
  value: string
}

export default function ImageUpload({ onChange, value }: ImageUploadProps) {
  const [files, setFiles] = useState<FileWithPreview[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFiles = (newFiles: FileList | null) => {
    if (newFiles) {
      const updatedFiles = Array.from(newFiles).map(file => ({
        ...file,
        preview: URL.createObjectURL(file)
      }))
      setFiles(prevFiles => [...prevFiles, ...updatedFiles])
      onChange(updatedFiles[0]?.preview || '')
    }
  }

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    handleFiles(e.dataTransfer.files)
  }

  const onDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const onDragLeave = () => {
    setIsDragging(false)
  }

  const removeFile = (fileToRemove: FileWithPreview) => {
    setFiles(files.filter(file => file !== fileToRemove))
    URL.revokeObjectURL(fileToRemove.preview)
    onChange('')
  }

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <Card>
        <CardContent className="pt-6">
          <div
            onDrop={onDrop}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onClick={() => fileInputRef.current?.click()}
            className={`
              relative rounded-lg border-2 border-dashed
              sm:p-12 p-4 text-center transition-colors cursor-pointer
              ${isDragging 
                ? 'border-primary bg-primary/5' 
                : 'border-muted hover:border-muted-foreground/50'
              }
            `}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={(e) => handleFiles(e.target.files)}
              multiple
              accept="image/png,image/jpeg,image/webp"
              className="hidden"
            />
            <div className="flex flex-col items-center gap-4">
              <div className="rounded-lg bg-primary/10 p-2 sm:p-4">
                <ImageIcon className="sm:h-8 h-4 sm:w-8 w-4 text-primary" />
              </div>
              <div className="text-sm font-medium">
                Drop your images here, or{' '}
                <span className="text-primary hover:text-primary/80 transition-colors">
                  browse
                </span>
              </div>
              <div className="text-xs text-muted-foreground">
                Supports PNG, JPG & WEBP up to any size
              </div>
            </div>
          </div>

          {files.length > 0 && (
            <div className="mt-8 grid grid-cols-2 gap-4">
              {files.map((file) => (
                <div key={file.name} className="relative aspect-square rounded-md overflow-hidden ring-1 ring-border group">
                  <img
                    src={file.preview}
                    alt={file.name}
                    className="h-full w-full object-cover"
                  />
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={(e) => {
                      e.stopPropagation()
                      removeFile(file)
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}