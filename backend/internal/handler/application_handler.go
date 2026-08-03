package handler

import (
	"backend/internal/models"
	"backend/internal/service"
	"net/http"

	"github.com/gin-gonic/gin"
)

type ApplicationHandler interface {
	PostApplication(c *gin.Context)
}

type ApplicationHandlerImpl struct {
	svc service.ApplicationService
}

func NewApplicationHandler(svc service.ApplicationService) *ApplicationHandlerImpl {
	return &ApplicationHandlerImpl{svc: svc}
}

func (ah *ApplicationHandlerImpl) PostApplication(c *gin.Context) {
	var a models.Application

	err := c.ShouldBindJSON(&a)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	application, err := ah.svc.CreateApplication(a)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, application)
	return
}
